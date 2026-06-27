import { useState, useContext } from 'react'
import {Routes, Route, useLocation} from "react-router-dom"


import Cartpage from './pages/cart.jsx'
import Home from './pages/home.jsx'
import Navbar from './components/nav.jsx'
import Footer from './components/footer.jsx'
import Beauty from './pages/beauty/beauty.jsx'
import Tech from './pages/tech/tech.jsx'


import './css/home.css'
import './css/cart.css'
import './css/nav.css'
import './css/footer.css'


import { CartProvider } from './context/context.jsx'


import { useSelector } from 'react-redux'

function App(){
  const location = useLocation();
  const darkm = useSelector((state) => state.theme.darkMode)

  return (
  <>
    <CartProvider>
        <div className={darkm ? "darkmode" : "lightmode"}>

        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart"  element={<Cartpage />} />
            <Route path="/beauty"  element={<Beauty /> }/>
            <Route path="/tech" element={<Tech />}/>
          </Routes>
          {location.pathname !== '/cart' && <Footer />} 

          </div>
    </CartProvider>
  </>
    
  )
}

export default App