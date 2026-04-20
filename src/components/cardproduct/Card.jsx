import React from 'react'
import CardData from './CardData'


function Card({title,desc,price,id}) {
    return (
        <div key={id}>
            <h1>{title}</h1>
            <p>{desc}</p>
            <p>Rs :{price}</p>
        </div>
        // <div key={id}>
        //   <h2>{cardDAta.map((products)=>{
        //     return(
        //         <div>
        //         <h1>{products.title}</h1>
        //         <p>{products.description}</p>
        //         <p>{products.price}</p>
        //         </div>
        //     )
        //     })}</h2>
        // </div>

    )
}

export default Card
