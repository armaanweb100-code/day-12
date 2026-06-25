import { useState } from 'react'
import {Routes, Route} from "react-router-dom"

//pages
import Cartpage from './pages/cart.jsx'
import Home from './pages/home.jsx'
import Navbar from './components/nav.jsx'

//css
import './css/home.css'
import './css/cart.css'
import './css/nav.css'

const products = [
    {
      id: 1,
      "name": "Product 1",
      img: "/img/tshirt-black.jpg",
      "price":"₹499"
    },
    {
      id: 2,
      "name": "Product 2",
      img: "/img/tshirt-blue.jpg",
      "price":"₹599"
    },
    {
      id: 3,
      "name": "Product 3",
       img: "/img/tshirt-brown.jpg",
      "price":"₹399"
    },
    {
      id: 4,
      "name": "Product 4",
      img: "/img/tshirt-white.jpg",
      "price":"₹699"
    },
    {
      id: 5,
      "name": "Product 5",
      img: "../public/img/tshirt-white-2.jpg",
      "price":"₹549"
    },
    {
      id: 6,
      "name": "Product 6",
      img: "../public/img/hoodie-pink.jpg",
      "price":"₹449"
    }
]


function App(){
  const [cart, setCart] = useState([])
  
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home products={products} setCart={setCart} cart={cart} />} />
      <Route path="/cart"  element={<Cartpage cart={cart} setCart={setCart} />} />
    </Routes>
    </>
  )
}

export default App