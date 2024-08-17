import UserContext from "../../utils/UserContext";
import { imga } from "../../utils/constants";
import { useContext } from "react";
import RatingLogo from "../Assets/ratingStar.png";
const Restaurant = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  areaName,
}) => {
  // const { user } = useContext(UserContext);
  return (
    <div className="hover:scale-95 transition-all">
      <div className="w-72 h-52 m-3 bg-pink-50 shadow-lg rounded-3xl ">
        <img
          className="h-full w-full object-cover rounded-3xl"
          src={imga + cloudinaryImageId}
          alt="img"
        />
      </div>
      <div className="w-64 relative left-9">
        <h3 className=" font-bold text-2xl w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
          {name}
        </h3>
        <h4 className="whitespace-nowrap w-full overflow-hidden overflow-ellipsis">
          {cuisines.join(", ")}
        </h4>
        <h4>{areaName}</h4>
        <div className="flex items-center">
          <img src={RatingLogo} className="h-5" /> {avgRating}
        </div>
        {/* <h5>{user.fName + " " + user.lName}</h5> */}
      </div>
    </div>
  );
};

export default Restaurant;
