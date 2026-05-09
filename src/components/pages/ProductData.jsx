import React, { useState, useEffect } from 'react';
import { db, ref, onValue } from "../../Firebase.jsx";
import { Link } from 'react-router-dom';
import ProductDetails from './ProductDetails.jsx';

function ProductData() {
  const [products, setProducts] = useState([]);

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
        // console.log(list);
      } else {
        console.log("Database khali hai ya path galat hai!");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>My Products</h1>
      <ul>
        {products.map((product) => (
          <div key={product.id}>
            <Link to={`productdata/${product.id}`}>
              <ProductDetails key={product.id} product={product} />
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ProductData;