import React from "react";
import "./RestaurantBanner.scss";
import Button from "../../Button/Button";

const RestaurantBanner = () => {
  return (
    <div className="RestaurantBanner-container">
      <div className="content">
        <h1>
        Robin Hood <br /> Tavern
        </h1>
        <Button title="See More" path='/restaurants/12012469' />
      </div>
    </div>
  );
};

export default RestaurantBanner;
