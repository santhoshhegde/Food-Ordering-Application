import { useEffect, useState } from "react";

const useRestaurantMenu = (restId) => {
  const [restaurantMenu, setRestaurantMenu] = useState();
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setRestaurantMenu(json.data);

    // console.log(json.data);
    // console.log(
    //   json.data.cards[json.data.cards.length - 1].groupedCard.cardGroupMap
    //     .REGULAR.cards
    // );
  }
  return restaurantMenu;
};

export default useRestaurantMenu;
