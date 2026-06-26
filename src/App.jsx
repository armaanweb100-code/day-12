import { useState } from 'react'
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
import CartContext from './context/context.js'
import {cartState} from './context/context.js'

function App(){
  const [cart, setCart] = useState([]);


  return (
    <>
    <Navbar cart={cart}/>
    <cartState.Provider value={cartState}>
      <Routes>
        <Route path="/" element={<Home setCart={setCart} cart={cart} />} />
        <Route path="/cart"  element={<Cartpage cart={cart} setCart={setCart} />} />
        <Route path="/beauty"  element={<Beauty cart={cart} setCart={setCart}/> }/>
        <Route path="/tech" element={<Tech cart={cart} setCart={setCart}/>}/>
      </Routes>
    </cartState.Provider>
    </>
  )
}

export default App