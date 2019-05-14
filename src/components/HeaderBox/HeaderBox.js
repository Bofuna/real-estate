import React from "react";
import "./HeaderBox.css";
import Button from "../Button/Button";

const HeaderBox = () => {
  return (
    <div className="headerbox__container">
      <div className="headerbox">
        <span className="headerbox__name">Toad Hall 496</span>
        <span className="headerbox__address">
          <i className="fas fa-map-marker-alt" />
          9889 Humberto Gardens, Alejandrashire, NY 76055
        </span>
        <div className="headerbox__specifications">
          <span className="headerbox__size">
            <i className="fas fa-landmark" />
            1200 sqft
          </span>
          <span className="headerbox__bedrooms">
            <i className="fas fa-bed" />
            05 Bedrooms
          </span>
          <span className="headerbox__bathrooms">
            <i className="fas fa-bath" />
            03 Bathrooms
          </span>
        </div>
        <div className="headerbox__buttons">
          <Button text="$2500/per month" />
          <Button text="View Details" />
        </div>
      </div>
    </div>
  );
};

export default HeaderBox;
