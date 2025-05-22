import "./header.css"

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

export default Header;