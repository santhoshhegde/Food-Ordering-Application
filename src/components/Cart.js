import { useSelector } from "react-redux";
import FoodCart from "./FoodCart";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.item);
  console.log(cartItem);
  return cartItem.length == 0 ? (
    <h1>Cart Empty</h1>
  ) : (
    <div className="flex flex-wrap">
      {cartItem.map((item) => (
        <FoodCart {...item}></FoodCart>
      ))}
    </div>
  );
};

export default Cart;
