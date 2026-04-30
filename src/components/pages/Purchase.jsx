import React, { useState, useEffect } from 'react'
import { db, ref, onValue } from "../../Firebase.jsx"
import "../../App.css"
import Btns from '../buttons/Btns.jsx'

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
  </div>`

function Purchase() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productsRef = ref(db, 'Products/');
    const unsubscribe = onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      const productsList = [];
      for (const key in data) {
        productsList.push({
          id: key,
          ...data[key]
        });
      }
      setProducts(productsList);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const skeletons = skeletonCard.repeat(8);

  return (
    <div className="dashboard-wrapper">
        <div id='productCard'>
          {loading ? (
            <div 
              style={{ display: 'contents' }} 
              dangerouslySetInnerHTML={{ __html: skeletons }} 
            />
          ) : (
            products.map((pro) => (
              <div className="cardContainer" key={pro.id}>
                <div className="card1">
                  <img 
                    className="card-img" 
                    src={pro.product_picture || 'https://via.placeholder.com/300x200?text=No+Image'} 
                    alt={pro.proName}
                  />
                </div>
                <div className="card12">
                  <p className="card-price">Rs : {pro.price}</p>
                  <h1 className="card-title">{pro.proName}</h1>
                  <p className="card-desc">{pro.desc}</p>
                  <div className="card-btns">
                    <Btns id='add-to-card-btn' class='addToCardBtn' btn='Add To Cart'/>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
    </div>
  );
}

export default Purchase
