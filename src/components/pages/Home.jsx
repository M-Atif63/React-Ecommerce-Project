import React from 'react'
import { Link, Links } from 'react-router-dom'
import Btns from '../buttons/Btns.jsx'
import Unorderlist from '../unOrderList/Unorderlist.jsx'
import Inputfields from '../inputFields/Inputfields.jsx'
import Error from '../importantmessage/Error.jsx'
import { db, ref, set } from "../../Firebase.jsx"
import '../../App.css'
import Heading from '../headings/Heading.jsx'

function Home() {
  console.log("This is alive")

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

    // Fauran (Instantly) UI update karein (Optimistic UI)
    TitleElement.value = "";
    DescElement.value =  "";
    PriceElement.value = "";
    ImgUrlElement.value = "";
    
    errorMsg.innerText = "Adding...";
    errorMsg.style.color = "blue";

    var ul = document.getElementById("productCard")
    var li = document.createElement("li")
    li.innerHTML = `
    <div class="card">
    <img width="25px" src="${ImgUrl}" alt="Product Image">
    <h1 class="title">${Title}</h1>
    <p class="description">${Desc}</p>
    <p class="price">Rs : ${Price}</p> 
    </div>
    `
    ul.append(li)

    // Firebase par background mein upload hone dein
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
      <Unorderlist id='productCard' />
    </div>)


}

export default Home