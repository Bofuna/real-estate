import React from "react";
import "./SearchForm.css";
import SearchInput from "../SearchInput/SearchInput";

const SearchForm = () => {
  return (
    <div className="searchform__container">
      <div className="searchform__container__inner">
        <span className="searchform__title">Find Your Dream Home</span>
        <form className="searchform">
          <SearchInput />
          <SearchInput />
          <SearchInput />
          <SearchInput />
          <SearchInput />
          <SearchInput />
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
