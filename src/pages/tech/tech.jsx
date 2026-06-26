export default function Tech({cart, setCart}){
    const products = [
        {
        id: 201,
        "name": "Product 1",
        img: "/img/tech/p1.jpg",
        "price":"₹4599",
        quantity: 0
        },
        {
        id: 202,
        "name": "Product 2",
        img: "/img/tech/p2.jpg",
        "price":"₹1599",
        quantity: 0
        },
        {
        id: 203,
        "name": "Product 3",
        img: "/img/tech/p3.jpg",
        "price":"₹2399",
        quantity: 0
        },
        {
        id: 204,
        "name": "Product 4",
        img: "/img/tech/p4.jpg",
        "price":"₹5699",
        quantity: 0
        },
        {
        id: 205,
        "name": "Product 5",
        img: "/img/tech/p5.jpg",
        "price":"₹10549",
        quantity: 0
        },
        {
        id: 206,
        "name": "Product 6",                                          
        img: "/img/tech/p6.jpg",
        "price":"₹4349",
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