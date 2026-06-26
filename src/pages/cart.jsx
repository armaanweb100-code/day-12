import { useContext } from "react";
import  CartContext  from '.././context/context.jsx'

export default function Cartpage(){
    const {cart, setCart} = useContext(CartContext)
    return (
        <>

        {cart.length !== 0 ? 
        <div className="cart-container">
             <h1>Your Cart</h1>
        {
            cart.map(pr => {
                return (
                    <div className="cart-item" key={pr.id}>
                        <img src={pr.img} alt="Product"></img>

                        <div className="details">
                            <h3>{pr.title}</h3>
                            <p>{pr.price}</p>
                            <p>Quantity: {pr.quantity}</p>
                        </div>

                        <button onClick={() => setCart(cart.filter(i => i.id !== pr.id))}>Remove</button>
                    </div>
                )
            })
        }
        </div> : 
        <div className="empty">Cart is empty</div>
        }   
        </>
    )
}