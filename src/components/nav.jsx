import { Link } from 'react-router-dom'

export default function Navbar(){
    return (
            <>
            <nav className="navbar">
                <h2>Armaan-store</h2>

                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/cart">cart</Link>
                </div>
            </nav>
            </>
    )
}