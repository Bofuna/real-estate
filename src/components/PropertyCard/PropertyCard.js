import React from "react";
import "./PropertyCard.css";
import Button from "../Button/Button";

const PropertyCard = () => {
  return (
    <div className="propertycard">
      <img
        src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80"
        alt="house"
        className="propertycard__image"
      />
      <span className="propertycard__description">
        Modern Apartment on the Day
      </span>
      <span className="propertycard__address">
        <i className="fas fa-map-marker-alt" />
        622 Dixie Path, South Tobinchester, UT 98836
      </span>
      <span className="propertycard__price">$20,000</span>
      <div className="propertycard__specifications">
        <span className="propertycard__size">
          <i className="fas fa-landmark" />
          1200 sqft
        </span>
        <span className="propertycard__bedrooms">
          <i className="fas fa-bed" />
          05 Bedrooms
        </span>
        <span className="propertycard__bathrooms">
          <i className="fas fa-bath" />
          03 Bathrooms
        </span>
      </div>
      <div className="propertycard__bottom">
        <span className="propertycard__time">
          <i className="fas fa-calendar" />1 month ago
        </span>
        <Button text="Details" />
      </div>
    </div>
  );
};

export default PropertyCard;
