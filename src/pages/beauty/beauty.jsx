import { useContext } from "react";
import  CartContext  from '../.././context/context.jsx'

export default function Beauty(){
    const {cart, setCart} = useContext(CartContext)
     const products = [
        {
        id: 101,
        "name": "Product 1",
        img: "/img/beauty/p1.jpg",
        "price":"₹4599",
        quantity: 0
        },
        {
        id: 102,
        "name": "Product 2",
        img: "/img/beauty/p2.jpg",
        "price":"₹599",
        quantity: 0
        },
        {
        id: 103,
        "name": "Product 3",
        img: "/img/beauty/p3.jpg",
        "price":"₹299",
        quantity: 0
        },
        {
        id: 104,
        "name": "Product 4",
        img: "/img/beauty/p4.jpg",
        "price":"₹599",
        quantity: 0
        },
        {
        id: 105,
        "name": "Product 5",
        img: "/img/beauty/p5.jpg",
        "price":"₹1549",
        quantity: 0
        },
        {
        id: 106,
        "name": "Product 6",                                          
        img: "/img/beauty/p6.jpg",
        "price":"₹449",
        quantity: 0
        }                                                                                                                                                            
    ]  
    return (
        <>
            <div className="container">

            {products.map(prod => {
                function addToCart(){
                    const exists = cart.find(item => item.id === prod.id);
                
                        if (exists) {
                            setCart(
                                cart.map(item => {
                                    if (item.id === prod.id) {
                                        return {...item, quantity: item.quantity + 1};
                                    }   
                
                                    return item;
                                })
                            );
                        } else {
                            setCart([...cart,{...prod,quantity: 1}]);
                        }
                }
                return(
                    <div className="card" key={prod.id}>
                        <img src={prod.img} alt={prod.name}></img>
                        <h3>{prod.name}</h3>
                        <p>{prod.price}</p>
                        <button onClick={addToCart}>Add to Cart</button>
                    </div>
                )
            })}
        </div>
        </>
    )
}