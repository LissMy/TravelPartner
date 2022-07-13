import React from "react";
import "./AttractionsBanner.scss";
import Button from "../../Button/Button";

const AttractionsBanner = () => {
  return (
    <div className="AttractionsBanner-container">
      <div className="content">
        <h1>
        Atoll Transfer
        </h1>
        <Button title="See More" path='/offers' />
      </div>
    </div>
  );
};

export default AttractionsBanner;
