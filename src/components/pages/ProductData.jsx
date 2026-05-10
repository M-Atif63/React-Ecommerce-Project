import React, { useState, useEffect } from 'react';
import { db, ref, onValue } from "../../Firebase.jsx";
import { Link } from 'react-router-dom';
import Cart from './Cart.jsx';
import SearchField from '../inputFields/SearchField.jsx';

const skeletonCard = `
  <div class="skeleton-card">
    <div class="skeleton-img"></div>
    <div class="skeleton-body">
      <div class="skeleton-line short"></div>
      <div class="skeleton-line long"></div>
      <div class="skeleton-line medium"></div>
      <div class="skeleton-btns">
        <div class="skeleton-btn"></div>
        <div class="skeleton-btn"></div>
      </div>
    </div>
  </div>`;

function ProductData() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const starCountRef = ref(db, 'Products/');

    const unsubscribe = onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const list = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setProducts(list);
      } else {
        setProducts([]);
        console.log("Database khali hai ya path galat hai!");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const skeletons = skeletonCard.repeat(6);

  return (
    <div className="dashboard-wrapper">
      <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
        <SearchField/>
        <Cart/>
        </div>
      <div id="productCard">
        {loading ? (
          <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: skeletons }} />
        ) : (
          products.map((product) => (
            <div className="cardContainer" key={product.id}>
              <Link to={`/products/${product.id}`} className="product-link">
                <div className="card1">
                  <img
                    className="card-img"
                    src={product.product_picture || 'https://via.placeholder.com/300x200?text=No+Image'}
                    alt={product.proName}
                  />
                </div>
                <div className="card12">
                  <p className="card-price">Rs : {product.price}</p>
                  <h1 className="card-title">{product.proName}</h1>
                  <p className="card-desc">{product.desc}</p>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductData;