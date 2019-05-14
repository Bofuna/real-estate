import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  );
};

export default App;
