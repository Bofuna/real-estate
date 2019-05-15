import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import RecentProperties from "../RecentProperties/RecentProperties";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <SearchForm />
      <RecentProperties />
    </div>
  );
};

export default Home;
