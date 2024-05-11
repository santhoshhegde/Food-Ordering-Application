import { imga } from "../config";

const Restaurant = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <div className="card">
      <img src={imga + cloudinaryImageId} alt="img" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating}</h5>
    </div>
  );
};

export default Restaurant;
