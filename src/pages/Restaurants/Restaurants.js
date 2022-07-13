import React from "react";
import RestaurantBanner from "../../components/Banner/RestaurantBanner/RestaurantBanner";
import Hotel from "../../components/Cards/Hotel/Hotel";
import "./Restaurants.scss";

const Restaurants = () => {
  return <div>
    <RestaurantBanner />
    <div className="hotels">
          <h1 className='title'>Best <span>Restaurants</span></h1>
          <div className="hotels-4x">
            <Hotel />
            <Hotel />
            <Hotel />
            <Hotel />
            <Hotel />
            <Hotel />
            <Hotel />
            <Hotel />
          </div>
        </div>
  </div>;
};

export default Restaurants;
