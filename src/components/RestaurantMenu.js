import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imga } from "../../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/Hooks/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";
import ItemCategory from "./ItemCategory";

const RestaurantMenu = () => {
  const { restId } = useParams();

  const restaurantMenu = useRestaurantMenu(restId);

  const dispatch = useDispatch();

  if (!restaurantMenu) return <Shimmer />;

  const categories = restaurantMenu.cards[
    restaurantMenu.cards.length - 1
  ].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (category) =>
      category.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log(categories);
  const addItemToCart = (itemName) => {
    dispatch(addItem(itemName));
    console.log(itemName);
  };
  // console.log(
  //   "aksjdhfkjsdf" + categories[0].card.card.itemCards[0].card.info.name
  // );
  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <div className="mt-24 flex flex-col items-center min-h-svh">
      <h1>RestaurantMenu : {restId}</h1>
      <div>
        <div className="bg-black w-[70vw]">
          <img
            src={
              imga + restaurantMenu.cards[2].card.card.info.cloudinaryImageId
            }
            className="h-60 m-10 p-2"
          />
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
