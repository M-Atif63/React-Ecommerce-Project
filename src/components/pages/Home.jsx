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
return (
  <div className="home-container">
    <div className="form-container">
      <Heading text="Add New Product" />
      <Inputfields proTitle="Enter Product Title" proDescription="Enter Product Description" ProPrice="Enter Product Price" proImgUrl="Enter Product Image Url" />
      <Error id='mess'/>
      <Btns btn="Add Product" id="addBtn" onclick={proAdded} />
    </div>
    <Heading value="Your Products" />
    <Unorderlist id='productCard'/>
  </div>)
  console.log("This is alive")
  function proAdded() {
    var proId = Date.now();
    var Title = document.getElementById("title").value;
    var Desc = document.getElementById("desc").value;
    var Price = document.getElementById("price").value;
    var ImgUrl = document.getElementById("imgUrl").value;
    
    
    var error = document.getElementById("mess")
    var showError = ""


    if(Title == "" || Desc == "" || Price == "" || ImgUrl == "") {
      showError = "Please fill All Fields" 
      error.style.color = "red"
      error.innerText = showError
    }
    else if(!Title == "" || !Desc == "" || !Price == "" || !ImgUrl == "") {
      var showError = "Add Product Successfully"
      error.style.color = "green"
      error.innerText = showError
    }



    set(ref(db, 'Products/' + proId), {
      proName: Title,
      desc: Desc,
      price: Price,
      product_picture: ImgUrl,
    });

    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("price").value = "";
    document.getElementById("imgUrl").value = "";

    var ul = document.getElementById("productCard")
    var li = document.createElement("li")
    li.innerHTML = `
    <div class="card">
    <img src=${ImgUrl} alt="Product Image" required>
    <h1 class="title" required>${Title}</h1>
    <p class="description" required>${Desc}</p>
    <p class="prise" required>${Price}</p> 
    </div>
    `
    ul.append(li)

  }
  

}

export default Home