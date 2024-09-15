import { useSelector } from "react-redux";
import FoodCart from "./FoodCart";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.item);
  const navigate = useNavigate();
  console.log(cartItem);
  return cartItem.length == 0 ? (
    <div className="min-h-[93vh] flex flex-col items-center justify-center">
      <h1 className="text-3xl  font-bold">Your cart is empty</h1>
      <p className="mt-2 text-gray-400">
        You can go to home page to view more restaurants
      </p>
      <button
        className="bg-orange-500 p-3 text-white mt-4 font-semibold"
        onClick={() => navigate("/")}
      >
        SEE THE RESTAURANT NEAR YOU
      </button>
    </div>
  ) : (
    <div className="flex flex-wrap mt-24 min-h-[76vh]">
      {cartItem.map((item) => (
        <FoodCart {...item}></FoodCart>
      ))}
    </div>
  );
};

export default Cart;
