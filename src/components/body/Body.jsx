import "../body/body.css";
import RestaurantCard from "../restoCard/RestaurantCard.jsx";
import SearchBar from "../search/Searchbar.jsx";
import Filter from "../filter/Filter.jsx";
import { useEffect, useState } from "react";
import Shimmer from "../shimmer/Shimmer.jsx";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.973724&lng=77.69405259999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  const handleTopRatedFilter = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setFilteredRestaurants(filteredList);
  };

  const resetFilters = () => {
    setFilteredRestaurants(listOfRestaurants);
    setSearchText("");
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <Filter onTopRatedFilter={handleTopRatedFilter} />
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          onSearch={handleSearch}
        />
        <button className="reset-btn" onClick={resetFilters}>
          Reset
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;