import { useState } from "react";
import "./header.css";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

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
          {/*Start Login & Logout feature*/}
          <button
            className="login-button"
            onClick={() => {
              setBtnNameReact((prev) =>
                prev === "Login" ? "Logout" : "Login"
              );
            }}
          >
            <i
              className={`fa-solid ${
                btnNameReact === "Login" ? "fa-user" : "fa-right-from-bracket"
              }`}
              style={{ marginRight: "5px" }}
            ></i>
            {btnNameReact}
          </button>
          {/*End Login & logout feature*/}
        </ul>
      </div>
    </div>
  );
};

export default Header;
