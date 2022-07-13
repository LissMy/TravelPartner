import React from "react";
import { Link } from 'react-router-dom'
import Button from "../../Button/Button";
import "./Hotel.scss";

const Hotel = () => {
  return (
    <div className="hotelCard">
      <img
        src="https://media-cdn.tripadvisor.com/media/photo-f/15/88/f0/ad/centre-point-hotel-pattaya.jpg"
        alt="hotelImage"
      />
      <div className="content">
        <h1>Centre Point Hotel Pattaya</h1>
        <div className="info">
        <p>
          Location: <span>Pattaya, Chonburi Province</span>
        </p>
        <p>
          Rating: <span>4.0</span>
        </p>
        </div>
        <Button title="See More" path='/offers' />
      </div>
    </div>
  );
};

export default Hotel;
