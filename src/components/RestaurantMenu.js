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

  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <div className="mt-24">
      <h1>RestaurantMenu : {restId}</h1>
      <div>
        <img
          src={imga + restaurantMenu.cards[2].card.card.info.cloudinaryImageId}
          className="h-80 m-10"
        />
        <ul className="list-decimal">
          {categories[0].card.card.itemCards.map((item) => (
            <>
              <ItemCategory {...item} />
              {/* <li key={item.card.info.id}>
                {item.card.info.name}
                <button
                  className="bg-green-400"
                  onClick={() => addItemToCart(item.card.info)}
                >
                  Add
                </button>
              </li> */}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
