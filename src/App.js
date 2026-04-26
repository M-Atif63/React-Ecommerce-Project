// import logo from './logo.svg';
// import './App.css';
// import Card from './components/cardproduct/Card.jsx';
// import CardData from "./components/cardproduct/CardData.jsx"

// function App() {
//   return (
//     <div>
//       {
//         CardData.map((product) => {
//           // console.log("productId=>",product.id)
//           return (
//           <>
//             <Card Key={product.id} title={product.title} desc={product.description} price={product.price} />
//           </>
//           )
//         })
//       }
//     </div>
//   );
// }
// export default App;


import React from 'react'
import Navigation from "./components/route/Navigation.jsx"
import Home from './components/pages/AddNewProduct.jsx'
import ProductData from './components/cardproduct/ProductData.js'
import Navbar from './components/navbar/Navbar.jsx'

function App(props) {
  return (
    <div>
      <Navigation/>
    </div>
  )
}

export default App