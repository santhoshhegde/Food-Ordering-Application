import Restaurant from "./Restaurant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/Hooks/useOnlineStatus";
import { search } from "../../utils/helper";
import { HOME_API } from "../../utils/Hooks/apiConstants";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filtered, setFiltered] = useState([]);
  // const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    try {
      const response = await fetch(HOME_API).catch((err) => console.log(err));
      const json = await response.json().catch((e) => console.log(e));
      setAllRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFiltered(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.log(err);
    }
  }
  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return (
      <h1 className="flex justify-center items-center text-3xl font-bold min-h-[98vh]">
        Offline
      </h1>
    );
  }

  if (!allRestaurant)
    return <h1>Something went wrong please refersh the page</h1>;

  return allRestaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex justify-center mt-28 mb-4">
        <input
          type="text"
          placeholder="Search for restaurants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          className="p-2 w-96 outline-1 border border-black rounded-l-md "
        />
        <button
          className="bg-purple-900 text-white p-2 px-7 rounded-r-md hover:bg-purple-600"
          onClick={() => {
            let data = [];
            data = search(searchText, allRestaurant);
            setFiltered(data);
          }}
        >
          Search
        </button>
      </div>
      {filtered.length == 0 ? (
        <h1 className="text-4xl text-center">No match found</h1>
      ) : (
        <div className="min-h-screen">
          <div className="my-1">
            {/* <input
          type="text"
          value={user.fName}
          onChange={(e) => setUser({ ...user, fName: e.target.value })}
        /> */}
          </div>
          <div className="flex flex-wrap justify-center">
            {filtered.map((restaurant) => (
              <Link
                to={"restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <Restaurant {...restaurant.info} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
