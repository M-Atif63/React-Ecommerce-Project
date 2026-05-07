import React, { useEffect, useState } from 'react'
import "./Cart.css"
import Btns from '../buttons/Btns.jsx'
import { db, ref, onValue } from "../../Firebase.jsx"

function Cart() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleCart = () => {
        setIsOpen(!isOpen)
    }
    const [count, setCount] = useState(0)


    // useEffect(() => {
    //     const productsRef = ref(db, 'Products/');
    //     const unsubscribe = onValue(productsRef, (snapshot) => {
    //         const data = snapshot.val();
    //         const productsList = [];
    //         for (const key in data) {
    //             const product = {
    //                 proId: data[key].id,
    //                 proName: data[key].title,
    //                 proDesc: data[key].description,
    //                 proPrice: data[key].price,
    //                 proImg: data[key].imageUrl
    //             }       
    // var cartItem = document.getElementById('cartItem');
    // var cartList = document.getElementById('cartList');
    // var li = document.createElement('li');
    // var proImage = document.createElement('img').src = product.proImg;
    // var proName = document.createElement('h4').innerText = product.proName;
    // var proDesc = document.createElement('p').innerText = product.proDesc;
    // var proPrice = document.createElement('span').innerText = "$" + product.proPrice;
    // li.append(proImage);
    // li.append(proName);
    // li.append(proDesc);
    // li.append(proPrice);
    // cartList.append(li);
    // cartItem.append(cartList);
    //     };

    //     }
    // )},[]);
    return (
        <>
            <div className="cart-toggle-wrapper">
                <Btns
                    id='cartBtn'
                    className='CartBtn'
                    btn={<><i className="fa-solid fa-cart-shopping"></i> <span className="badge">3</span></>}
                    onClick={toggleCart}
                />
            </div>

            <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <div className="header-title">
                        <h2>Shopping Cart</h2>
                        <span className="item-count">{count} Items</span>
                    </div>
                    <button className="close-btn" onClick={toggleCart}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div className="cart-body">
                    <div className="cart-item" id='cartItem'>
                        <ul id='cartList'></ul>
                        <div className="item-img-container">
                            <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIi
                            AdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nz
                            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
                            // AoASAIGR5lAoAQAgBIBQAkIEAIASgeIBUARlALAH1kASgIAQQXWAWOUoIMhR9IAoA1ghYAlMSGEhmhQBDnAKMARgooAQBSECAMSAIAQAEoHAP//Z' id='proImage' alt="product" className="item-img" />
                        </div>
                        <div className="item-details">
                            <div className="item-info">
                                <h4>Premium Headphones</h4>
                                <p className="item-category">Electronics</p>
                            </div>
                            <div className="item-pricing">
                                <span className="item-price">$299.00</span>
                                <div className="qty-control">
                                    <button onClick={() => setCount(count - 1)}><i className="fa-solid fa-minus"></i></button>
                                    <span>{count}</span>
                                    <button onClick={() => setCount(count + 1)}><i className="fa-solid fa-plus"></i></button>
                                </div>
                            </div>
                        </div>
                        <button className="delete-item" title="Remove Item">
                            <i className="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                </div>

                <div className="cart-footer">
                    <div className="price-summary">
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>$299.00</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span className="free-shipping">Free</span>
                        </div>
                        <div className="summary-row total">
                            <span>Total</span>
                            <span>$299.00</span>
                        </div>
                    </div>
                    <button className="checkout-btn">
                        <span>Checkout Now</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            {isOpen && <div className="overlay" onClick={toggleCart}></div>}
        </>
    )
}

export default Cart
