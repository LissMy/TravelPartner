import React from "react";
import Button from "../../Button/Button";
import "./Hotel.scss";

const Hotel = ({ hotel }) => {
  if(typeof hotel == 'undefined') {
    return <h1>Loading...</h1>
  }
  const { location_id, name, location_string, rating, photo } = (typeof hotel !== 'undefined' && hotel)
  return (
    <div className="hotelCard">
      <img
        src={photo?.images?.medium.url}
        alt={name}
      />
      <div className="content">
        <h1>{name}</h1>
        <div className="info">
          <p>
            Location: <span>{location_string}</span>
          </p>
          <p>
            Rating: <span>{rating}</span>
          </p>
        </div>
        <Button title="See More" path={`/hotels/${location_id}`} />
      </div>
    </div>
  );
};

export default Hotel;
