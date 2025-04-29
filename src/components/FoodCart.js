import { imga } from "../../utils/constants";

const FoodCart = ({ name, imageId, defaultPrice }) => {
  console.log(imga + imageId);
  return (
    <div className="m-2 ">
      <div className="w-44 ">
        <img src={imga + imageId} className="rounded-lg" />
      </div>
      <div className="w-44 relative">
        <h1>{name}</h1>
        {/* <h2>{defaultPrice / 100}</h2> */}
      </div>
    </div>
  );
};
export default FoodCart;
