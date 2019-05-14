import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <SearchForm />
    </div>
  );
};

export default Home;
