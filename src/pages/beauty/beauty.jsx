import { useContext, useState } from "react";
import CartContext from "../../context/context.jsx";

export default function Beauty() {
  const { cart, setCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState({
    101: 0,
    102: 0,
    103: 0,
    104: 0,
    105: 0,
    106: 0,
  });

  const products = [
    {
      id: 101,
      name: "Product 1",
      img: "/img/beauty/p1.jpg",
      price: "₹4599",
    },
    {
      id: 102,
      name: "Product 2",
      img: "/img/beauty/p2.jpg",
      price: "₹599",
    },
    {
      id: 103,
      name: "Product 3",
      img: "/img/beauty/p3.jpg",
      price: "₹299",
    },
    {
      id: 104,
      name: "Product 4",
      img: "/img/beauty/p4.jpg",
      price: "₹599",
    },
    {
      id: 105,
      name: "Product 5",
      img: "/img/beauty/p5.jpg",
      price: "₹1549",
    },
    {
      id: 106,
      name: "Product 6",
      img: "/img/beauty/p6.jpg",
      price: "₹449",
    },
  ];

  return (
    <>
      <div className="container">
        {products.map((prod) => {
          function addToCart() {
            if (quantity[prod.id] === 0) return;

            const exists = cart.find((item) => item.id === prod.id);

            if (exists) {
              setCart(
                cart.map((item) => {
                  if (item.id === prod.id) {
                    return {
                      ...item,
                      quantity: item.quantity + quantity[prod.id],
                    };
                  }

                  return item;
                }),
              );
            } else {
              setCart([
                ...cart,
                {
                  ...prod,
                  quantity: quantity[prod.id],
                },
              ]);
            }

            setQuantity({
              ...quantity,
              [prod.id]: 0,
            });
          }

          return (
            <div className="card" key={prod.id}>
              <img src={prod.img} alt={prod.name} />
              <h3>{prod.name}</h3>
              <p>{prod.price}</p>

              <p>
                Quantity:&nbsp;
                <button
                  onClick={() =>
                    setQuantity({
                      ...quantity,
                      [prod.id]:
                        quantity[prod.id] > 0 ? quantity[prod.id] - 1 : 0,
                    })
                  }
                >
                  -
                </button>
                &nbsp;{quantity[prod.id]}&nbsp;
                <button
                  onClick={() =>
                    setQuantity({
                      ...quantity,
                      [prod.id]: quantity[prod.id] + 1,
                    })
                  }
                >
                  +
                </button>
              </p>

              <button onClick={addToCart}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
