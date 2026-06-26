import { useContext, useState } from "react";
import CartContext from "../../context/context.jsx";

export default function Tech() {
  const { cart, setCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState({
    201: 0,
    202: 0,
    203: 0,
    204: 0,
    205: 0,
    206: 0,
  });

  const products = [
    {
      id: 201,
      name: "Product 1",
      img: "/img/tech/p1.jpg",
      price: "₹4599",
    },
    {
      id: 202,
      name: "Product 2",
      img: "/img/tech/p2.jpg",
      price: "₹1599",
    },
    {
      id: 203,
      name: "Product 3",
      img: "/img/tech/p3.jpg",
      price: "₹2399",
    },
    {
      id: 204,
      name: "Product 4",
      img: "/img/tech/p4.jpg",
      price: "₹5699",
    },
    {
      id: 205,
      name: "Product 5",
      img: "/img/tech/p5.jpg",
      price: "₹10549",
    },
    {
      id: 206,
      name: "Product 6",
      img: "/img/tech/p6.jpg",
      price: "₹4349",
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
