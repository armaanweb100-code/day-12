import { createContext } from "react";

const CartContext = createContext();

export const cartState = () =>{
      const [cart, setCart] = useState([]);
}

export default CartContext;