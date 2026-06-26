import { useState, useContext } from 'react'
import {Routes, Route} from "react-router-dom"

//pages
import Cartpage from './pages/cart.jsx'
import Home from './pages/home.jsx'
import Navbar from './components/nav.jsx'
import Beauty from './pages/beauty/beauty.jsx'
import Tech from './pages/tech/tech.jsx'

//css
import './css/home.css'
import './css/cart.css'
import './css/nav.css'

//context
import { CartProvider } from './context/context.jsx'

function App(){

  return (
    <>
    <CartProvider>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart"  element={<Cartpage />} />
        <Route path="/beauty"  element={<Beauty /> }/>
        <Route path="/tech" element={<Tech />}/>
      </Routes>
    </CartProvider>
    </>
  )
}

export default App