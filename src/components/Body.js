import Restaurant from "./Restaurant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/Hooks/useOnlineStatus";
import { search } from "../../utils/helper";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ).catch((err) => console.log(err));
    const json = await response.json().catch((e) => console.log(e));
    setAllRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFiltered(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return <h1>offline</h1>;
  }

  if (!allRestaurant)
    return <h1>Something went wrong please refersh the page</h1>;

  return allRestaurant.length == 0 ? (
    <Shimmer />
  ) : filtered.length == 0 ? (
    <h1>No match found</h1>
  ) : (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let data = [];
            data = search(searchText, allRestaurant);
            setFiltered(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filtered.map((restaurant) => (
          <Link
            to={"restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <Restaurant {...restaurant.info} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
