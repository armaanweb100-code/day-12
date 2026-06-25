export default function Cartpage({cart, setCart}){
    return (
        <>

        {cart.length !== 0 ? 
        <div className="cart-container">
             <h1>Your Cart</h1>
        {
            cart.map(pr => {
                return (
                    <div className="cart-item">
                        <img src={pr.img} alt="Product"></img>

                        <div className="details">
                            <h3>{pr.name}</h3>
                            <p>{pr.price}</p>
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