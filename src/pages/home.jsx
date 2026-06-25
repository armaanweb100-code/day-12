export default function Home({products, setCart, cart}){
    return (
        <>
        <div className="container">

            {products.map(prod => {
                return(
                    <div className="card" key={prod.id}>
                        <img src={prod.img} alt={prod.name}></img>
                        <h3>{prod.name}</h3>
                        <p>{prod.price}</p>
                        <button onClick={() => {
                            console.log("click")
                            setCart([...cart, prod])
                        }}>Add to Cart</button>
                    </div>
                )
            })}
        </div>
        </>
    )
}