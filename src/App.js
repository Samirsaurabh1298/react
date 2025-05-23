import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header.jsx"
import Body from "./components/body/Body.jsx"


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
