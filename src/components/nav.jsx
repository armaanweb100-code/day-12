import { useContext } from "react";
import  CartContext  from '.././context/context.jsx'
import { Link } from 'react-router-dom'

import { useDispatch } from "react-redux";
import { toggleTheme } from "../features/themeSlice.js";

export default function Navbar() {
    const {cart, setCart} = useContext(CartContext);
    const dispatch = useDispatch()

    
    return (
        <nav className="navbar">
            <h2>Armaan Store</h2>

            <div className="nav-links">
            <button onClick={() => dispatch(toggleTheme())}>theme</button>
                <Link to="/">Home</Link>
                <Link to="/beauty">beauty products</Link>
                <Link to="/tech">tech products</Link>

                <Link to="/cart" className="cart-link">
                    🛒

                    {cart.length > 0 && (
                        <span className="cart-count">
                            {cart.length}
                        </span>
                    )}
                </Link>
            </div>
        </nav>
    );
}