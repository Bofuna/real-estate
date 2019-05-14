import React from "react";
import "./Header.css";
import HeaderBox from "../HeaderBox/HeaderBox";

const Header = () => {
  return (
    <div
      className="header"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80)"
      }}
    >
      <HeaderBox />
    </div>
  );
};

export default Header;
