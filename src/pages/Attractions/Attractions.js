import React from "react";
import AttractionsBanner from "../../components/Banner/AttractionsBanner/AttractionsBanner";
import Hotel from "../../components/Cards/Hotel/Hotel";
import "./Attractions.scss";

const Attractions = () => {
  return <div>
    <AttractionsBanner />
    <div className="hotels">
          <h1 className='title'>Best <span>Attractions</span></h1>
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

export default Attractions;
