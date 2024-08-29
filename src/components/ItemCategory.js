import React, { useState } from "react";
import veg from "../Assets/veg-icon.png";
import nonveg from "../Assets/nonveg-icon.png";
import DownArrow from "../Assets/svg/arrow-down.svg";
import UpArrow from "../Assets/svg/arrow-up.svg";

const ItemCategory = ({ category }) => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className="max-w-4xl">
      {isShow ? (
        <button className="w-[70vw]" onClick={() => setIsShow(false)}>
          <div className="flex justify-between shadow-md p-2 items-center">
            <h2 className="font-bold">
              {category.card.card.title}({category.card.card.itemCards.length})
            </h2>
            <img className="h-3" src={UpArrow} alt="Up arrow" />
          </div>
        </button>
      ) : (
        <button className="w-[70vw]" onClick={() => setIsShow(true)}>
          <div className="flex justify-between w-full p-2">
            <h2 className="font-bold">
              {category.card.card.title}({category.card.card.itemCards.length})
            </h2>
            <img className="h-3" src={DownArrow} alt="Down arrow" />
          </div>
        </button>
      )}
      {category.card.card.itemCards.map((item) => (
        <div
          key={item.card.info.id}
          className={`${
            isShow ? "flex justify-between" : "hidden"
          } bg-white shadow-md p-2 min-w-96 m-8`}
        >
          <div className="ml-4 overflow-hidden w-3/5">
            {item.card.info.isVeg == 1 ? (
              <img src={veg} alt="green dot" className="h-4" />
            ) : (
              <img src={nonveg} alt="red dot" className="h-4" />
            )}
            <h3 className="text-l font-bold">{item.card.info.name}</h3>
            <p className="font-semibold">{"₹" + item.card.info.price / 100}</p>
            {item.card.info.ratings.aggregatedRating.rating ? (
              <p className="text-sm text-green-700 font-bold">
                {item.card.info.ratings.aggregatedRating.rating}(
                {item.card.info.ratings.aggregatedRating.ratingCountV2})
              </p>
            ) : (
              <span></span>
            )}

            <p className="text-gray-700">{item.card.info.description}</p>
          </div>
          <div className="relative">
            <img
              className="w-[60vw] sm:w-[30vw] md:w-[20vw] lg:w-[13vmax] rounded-lg"
              alt="img"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                item.card.info.imageId
              }
            />
            <button className="absolute top-[90%] left-[50%] transform -translate-x-1/2 bg-white shadow-xl text-green-500 font-bold p-[0.5vmax] px-[3vmax] rounded-lg text-[1.2vw]">
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCategory;
