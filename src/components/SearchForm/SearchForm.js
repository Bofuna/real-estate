import React from "react";
import "./SearchForm.css";
import SearchInput from "../SearchInput/SearchInput";
import Button from "../Button/Button";

const SearchForm = () => {
  return (
    <div className="searchform__container">
      <div className="searchform__container__inner">
        <span className="searchform__title">Find Your Dream Home</span>
        <form className="searchform">
          <SearchInput placeholder="Address, City" />
          <SearchInput placeholder="Type" />
          <SearchInput placeholder="Min. Price" />
          <SearchInput placeholder="Max. Price" />
          <SearchInput placeholder="Bedrooms" />
          <SearchInput placeholder="Bathrooms" />
          <Button text="Search" />
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
