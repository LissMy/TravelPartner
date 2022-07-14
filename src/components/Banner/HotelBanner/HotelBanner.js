import React from "react";
import "./HotelBanner.scss";
import Button from "../../Button/Button";

const HotelBanner = () => {
  return (
    <div className="Hotelbanner-container">
      <div className="content">
        <h1>
          Centara Grand Mirage <br /> Beach Resort Pattaya
        </h1>
        <Button title="See More" path="/hotels/1515437" />
      </div>
    </div>
  );
};

export default HotelBanner;
