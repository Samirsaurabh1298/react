import React from "react";
import ReactDOM from "react-dom/client";



const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <span className="logo">Foodie</span>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Card</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({resName, cusine, rating}) => {
  return (
    <div className="res-card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/zuthvcwjjvdjmo6n1pbl"
        alt="meghana food"
      ></img>
      <div className="content">
        <p>{resName}</p>
        <p>{cusine}</p>
        <p>{rating}</p>
        <p>38 minutes</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <>
      <div className="search">Search</div>
      <div className="resto-container">
        <RestaurantCard
          resName="Meghana Foods"
          cusine="Biryani, North Indian, Asian"
          rating="4.4"
        />
        <RestaurantCard resName="KFC" cusine="Burger, Fast Foods" rating="4.3"/>
      </div>
    </>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
