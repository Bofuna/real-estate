import React from "react";
import "./RecentProperties.css";
import PropertyCard from "../PropertyCard/PropertyCard";
import Pagination from "../Pagination/Pagination";

const RecentProperties = () => {
  return (
    <div className="recentproperties">
      <h3>Recent Properties</h3>
      <div className="recentproperties__grid">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
      <Pagination />
    </div>
  );
};

export default RecentProperties;
