import React from 'react'
import { db, ref, onValue } from "../../Firebase.jsx"
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard.jsx'

function Product() {
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
            return(
                <div key={proDetail.proId}>
                    
                </div>
            )
        }
    })
    // return (
    //     <div>
    //     </div>
    // )
}

export default Product
