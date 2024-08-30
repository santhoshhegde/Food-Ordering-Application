import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imga } from "../../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/Hooks/useRestaurantMenu";
import { useDispatch } from "react-redux";
import ItemCategory from "./ItemCategory";
import StarLogo from "../Assets/Star.png";

const RestaurantMenu = () => {
  const { restId } = useParams();

  const restaurantMenu = useRestaurantMenu(restId);

  if (!restaurantMenu) return <Shimmer />;

  const categories = restaurantMenu.cards[
    restaurantMenu.cards.length - 1
  ].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (category) =>
      category.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log(restaurantMenu);
  // console.log(
  //   "aksjdhfkjsdf" + categories[0].card.card.itemCards[0].card.info.name
  // );
  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <div className="mt-24 flex flex-col items-center min-h-svh">
      {/* <h1>RestaurantMenu : {restId}</h1> */}
      <div>
        <div className="bg-black w-[70vw] flex items-center">
          <img
            src={
              imga + restaurantMenu.cards[2].card.card.info.cloudinaryImageId
            }
            alt={restaurantMenu.cards[2].card.card.info.name}
            className="h-60 m-10 p-2"
          />
          <div className="text-white">
            <h1 className="text-4xl font-bold">
              {restaurantMenu.cards[2].card.card.info.name}
            </h1>
            <h2 className="text-gray-100 font-semibold">
              {restaurantMenu.cards[2].card.card.info.cuisines.join(",")}
            </h2>

            <div>
              <div className="flex justify-start items-center gap-3 mt-2">
                <div className="flex flex-col items-center">
                  <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                  <div className="h-[23px] w-[1px] bg-gray-300"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                </div>
                <div>
                  <h2>{restaurantMenu.cards[2].card.card.info.areaName}</h2>
                  <h2 className="font-semibold mt-1">
                    {restaurantMenu.cards[2].card.card.info.sla.slaString}
                  </h2>
                </div>
              </div>

              <div className="flex gap-6 mt-2">
                <ul className="flex gap-6 font-bold list-disc ml-5">
                  <li>
                    {restaurantMenu.cards[2].card.card.info.avgRating}(
                    {restaurantMenu.cards[2].card.card.info.totalRatingsString})
                  </li>
                  <li>
                    {restaurantMenu.cards[2].card.card.info.costForTwoMessage}
                  </li>
                  <li>
                    {restaurantMenu.cards[2].card.card.info.sla.slaString}
                  </li>
                </ul>
                {/* <h2 className="bg-green-800 font-bold">
                  {/* <img src={StarLogo} /> 
                  {restaurantMenu.cards[2].card.card.info.avgRating}(
                  {restaurantMenu.cards[2].card.card.info.totalRatingsString})
                </h2>
                <h2 className="font-bold">
                  {restaurantMenu.cards[2].card.card.info.costForTwoMessage}
                </h2>
                <h2 className="font-bold">
                  {restaurantMenu.cards[2].card.card.info.sla.slaString}
                </h2> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          {categories.map((category) => (
            <ItemCategory category={category} key={category.card.card.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
