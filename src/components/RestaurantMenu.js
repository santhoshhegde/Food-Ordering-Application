import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imga } from "../../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../../utils/Hooks/useRestaurantMenu";

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
  console.log(categories);

  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <>
      <h1>RestaurantMenu : {restId}</h1>
      <div className="flex">
        <img
          src={imga + restaurantMenu.cards[2].card.card.info.cloudinaryImageId}
          className="h-80 m-10"
        />
        <ul className="list-decimal">
          {categories[0].card.card.itemCards.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
