import { useContext, useState } from "react";
import  CartContext  from '.././context/context.jsx'

export default function Home(){
    const {cart, setCart} = useContext(CartContext)
    const [quantity, setQuantity] = useState({1: 0, 2: 0,3: 0,4: 0,5: 0, 6: 0});
    const products = [
        {
        id: 1,
        "name": "Product 1",
        img: "/img/shirts/tshirt-black.jpg",
        "price":"₹499",
        quantity: 0
        },
        {
        id: 2,
        "name": "Product 2",
        img: "/img/shirts/tshirt-blue.jpg",
        "price":"₹599",
        quantity: 0
        },
        {
        id: 3,
        "name": "Product 3",
        img: "/img/shirts/tshirt-brown.jpg",
        "price":"₹399",
        quantity: 0
        },
        {
        id: 4,
        "name": "Product 4",
        img: "/img/shirts/tshirt-white.jpg",
        "price":"₹699",
        quantity: 0
        },
        {
        id: 5,
        "name": "Product 5",
        img: "/img/shirts/tshirt-white-2.jpg",
        "price":"₹549",
        quantity: 0
        },
        {
        id: 6,
        "name": "Product 6",                                          
        img: "/img/shirts/hoodie-pink.jpg",
        "price":"₹449",
        quantity: 0
        }                                                                                                                                                            
    ]  
    return (
        <>
        <div className="container">

            {products.map(prod => {
                function addToCart() {

                        if (quantity[prod.id] === 0) {
                            return;
                        }

                        const exists = cart.find(item => item.id === prod.id);

                        if (exists) {

                            setCart(
                                cart.map(item => {
                                    if (item.id === prod.id) {
                                        return {
                                            ...item,
                                            quantity: item.quantity + quantity[prod.id]
                                        };
                                    }

                                    return item;
                                })
                            );

                        } else {

                            setCart([
                                ...cart,
                                {
                                    ...prod,
                                    quantity: quantity[prod.id]
                                }
                            ]);

                        }

                        setQuantity({
                            ...quantity,
                            [prod.id]: 0
                        });
                    }
                return(
                    <div className="card" key={prod.id}>
                        <img src={prod.img} alt={prod.name}></img>
                        <h3>{prod.name}</h3>
                        <p>{prod.price}</p>
                        <p>Quantity:<button onClick={() =>setQuantity({ ...quantity, [prod.id]: quantity[prod.id] > 0 ? quantity[prod.id] - 1 : 0})}>-</button>
                            {quantity[prod.id]}
                        <button onClick={() => setQuantity({...quantity, [prod.id]: quantity[prod.id] + 1})}> + </button>
                        </p>
                        <button onClick={addToCart}>Add to Cart</button>
                    </div>
                )
            })}
        </div>
        </>
    )
}