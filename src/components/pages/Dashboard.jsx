import React from 'react'
import { db, ref, onValue } from "../../Firebase.jsx"
import "../../App.css"
import Btns from '../buttons/Btns.jsx'

// Skeleton placeholder for loading state
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

function Dashboard(props) {
  const getData = ref(db, 'Products/')
  onValue(getData, (snapshot) => {
    const data = snapshot.val()
    let htmlContent = ""
    for (const key in data) {
      var proDetail = {
        proId: data[key].proId,
        productName: data[key].proName,
        productDesc: data[key].desc,
        productPrice: data[key].price,
        productImg: data[key].product_picture
      }
      htmlContent += `
        <div class="cardContainer">
          <div class="card1">
            <img class="card-img" src="${proDetail.productImg || 'https://via.placeholder.com/300x200?text=No+Image'}" alt="${proDetail.productName}"/>
          </div>
          <div class="card12">
            <p class="card-price">Rs : ${proDetail.productPrice}</p>
            <h1 class="card-title">${proDetail.productName}</h1>
            <p class="card-desc">${proDetail.productDesc}</p>
            <div class="card-btns">
            ${<Btns id='add-to-card-btn' class='addToCardBtn' btn='Add To Cart'/>}
            ${<Btns id='see-detail-btn' class='seeDetailBtn' btn='See More Details'/>}
            </div>
          </div>
        </div>`
    }
    const container = document.getElementById("productCard")
    if (container) {
      container.innerHTML = htmlContent;
    }
  })

  const skeletons = skeletonCard.repeat(6)

  return (
    <div
      id='productCard'
      dangerouslySetInnerHTML={{ __html: skeletons }}
    >
    </div>
  );
}

export default Dashboard
