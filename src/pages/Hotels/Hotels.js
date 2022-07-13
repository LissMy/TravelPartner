import React from "react";
import HotelBanner from "../../components/Banner/HotelBanner/HotelBanner";
import Hotel from "../../components/Cards/Hotel/Hotel";
import "./Hotels.scss";

const Hotels = () => {
  return <div>
    <HotelBanner />
    <div className="hotels">
          <h1 className='title'>Best <span>Hotels</span></h1>
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

export default Hotels;
