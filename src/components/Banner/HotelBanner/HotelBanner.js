import React from "react";
import "./HotelBanner.scss";
import Button from "../../Button/Button";

const HotelBanner = () => {
  return (
    <div className="Hotelbanner-container">
      <div className="content">
        <h1>
          Centre Point <br /> Hotel Pattaya
        </h1>
        <Button title="See More" path='/offers' />
      </div>
    </div>
  );
};

export default HotelBanner;
