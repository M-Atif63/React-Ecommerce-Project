import React from 'react'
import { useParams } from 'react-router-dom'
function ProductDetails({ product }) {
  const { id } = useParams()
  console.log("id=>", id);
  const pro = product.find(item => item.id === id)
  return (
    <div>
      <h1>Product Details</h1>
      <p>{pro.name}</p>
      <p>{pro.price}</p>
      <p>{pro.description}</p>
    </div>
  )
}

export default ProductDetails
