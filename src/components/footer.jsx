import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Footer(){
    const darkm = useSelector((state) => state.theme.darkMode)
    return (
        <>
            <footer>
                <div>
                    <h3>Copyright@2026</h3>
                </div>

                <div className="links">
                    <Link to="/beauty">beauty products</Link>
                    <Link to="/tech">tech products</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </footer>
        </>
    )
}