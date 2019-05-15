import React from "react";
import "./Pagination.css";
import Button from "../Button/Button";

const Pagination = () => {
  return (
    <div className="pagination">
      <Button text={<i className="fas fa-arrow-left" />} />
      <div className="pagination__page">
        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button text="4" />
        <Button text="5" />
      </div>
      <Button text={<i className="fas fa-arrow-right" />} />
    </div>
  );
};

export default Pagination;
