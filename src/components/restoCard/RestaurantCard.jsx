import "../restoCard/restaurantCrd.css";
import { CDN_URL } from "../../utils/constants.js"

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
    sla,
  } = resData.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="restaurant logo"
        src={CDN_URL+cloudinaryImageId}
      />

      <div className="content">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        {/* <h4>{sla.deliveryTime} minutes</h4> */}
      </div>
    </div>
  );
};

export default RestaurantCard;
