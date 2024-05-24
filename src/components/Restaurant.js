import { imga } from "../../utils/constants";

const Restaurant = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <div className="w-52 p-3 m-3 bg-pink-50 shadow-lg">
      <img src={imga + cloudinaryImageId} alt="img" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating}</h5>
    </div>
  );
};

export default Restaurant;
