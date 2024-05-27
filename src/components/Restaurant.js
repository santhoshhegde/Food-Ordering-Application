import { imga } from "../../utils/constants";

const Restaurant = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <div className="w-72 h-52 m-3 bg-pink-50 shadow-lg rounded-3xl">
      <img
        className="h-full w-full object-fill rounded-3xl"
        src={imga + cloudinaryImageId}
        alt="img"
      />
      <h3>{name}</h3>
      <h4 className="whitespace-nowrap w-full overflow-hidden overflow-ellipsis">
        {cuisines.join(", ")}
      </h4>
      <h5>{avgRating}</h5>
    </div>
  );
};

export default Restaurant;
