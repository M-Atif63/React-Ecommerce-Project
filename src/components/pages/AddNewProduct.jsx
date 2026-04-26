import React from 'react'
import { Link, Links } from 'react-router-dom'
import Btns from '../buttons/Btns.jsx'
import Unorderlist from '../unOrderList/Unorderlist.jsx'
import Inputfields from '../inputFields/Inputfields.jsx'
import Error from '../importantmessage/Error.jsx'
import { db, ref, set, onValue } from "../../Firebase.jsx"
import '../../App.css'
import Heading from '../headings/Heading.jsx'
import ProductData from '../cardproduct/ProductData.js'

const skeletonItem = `
  <li style="list-style:none">
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
    </div>
  </li>`

function AddNewProduct() {
  // console.log("This is db=>", db)
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
      <div class="cardCon">
        <div class="cardOne">
          <img class="cardImg" src="${proDetail.productImg || 'https://via.placeholder.com/300x200?text=No+Image'}" alt="${proDetail.productName}"/>
        </div>
        <div class="cardTwo">
          <p class="cardPrice">Rs : ${proDetail.productPrice}</p>
          <h1 class="cardTitle">${proDetail.productName}</h1>
          <p class="cardDesc">${proDetail.productDesc}</p>
          <div class="cardBtns">
            <button class='editBtn'>Edit</button>
            <button class='deleteBtn'>Delete</button>
          </div>
        </div>
      </div>
      `
    }
    const container = document.getElementById("yourProductCard")
    if (container) {
      container.innerHTML = htmlContent;
    }
  })
  function proAdded() {
    var TitleElement = document.getElementById("title");
    var DescElement = document.getElementById("desc");
    var PriceElement = document.getElementById("price");
    var ImgUrlElement = document.getElementById("imgUrl");
    var errorMsg = document.getElementById("mess");
    var addBtn = document.getElementById("addBtn");

    if (TitleElement.value == "" || DescElement.value == "" || PriceElement.value == "" || ImgUrlElement.value == "") {
      errorMsg.innerText = "Please fill All Fields";
      errorMsg.style.color = "red";
      return;
    }
    else {
      errorMsg.innerText = "";
    }

    var proId = Date.now();
    var Title = TitleElement.value;
    var Desc = DescElement.value;
    var Price = PriceElement.value;
    var ImgUrl = ImgUrlElement.value;

    TitleElement.value = "";
    DescElement.value = "";
    PriceElement.value = "";
    ImgUrlElement.value = "";

    errorMsg.innerText = "Adding...";
    errorMsg.style.color = "blue";

    set(ref(db, 'Products/' + proId), {
      proName: Title,
      desc: Desc,
      price: Price,
      product_picture: ImgUrl,
    })
      .then(() => {
        errorMsg.innerText = "Product Added Successfully!";
        errorMsg.style.color = "green";
      })
      .catch((err) => {
        addBtn.disabled = true;
        errorMsg.innerText = "Error: " + err.message;
        errorMsg.style.color = "red";
      });
  }

  return (
    <div className="home-container">
      <div className="form-container">
        <Heading text="Add New Product" />
        <Inputfields proTitle="Enter Product Title" proDescription="Enter Product Description" ProPrice="Enter Product Price" proImgUrl="Enter Product Image Url" />
        <Error id='mess' />
        <Btns btn="Add Product" id="addBtn" onclick={proAdded} />
      </div>
      <Heading value="Your Products" />
      <ul
        id='yourProductCard'
        dangerouslySetInnerHTML={{ __html: skeletonItem.repeat(6) }}
      />
      {/* <ProductData /> */}
    </div>)
}

export default AddNewProduct