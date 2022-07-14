import React from "react";
import Button from "../../Button/Button";
import "./Restaurant.scss";

const Restaurant = ({ restaurant }) => {
  if(typeof restaurant == 'undefined') {
    return <h1>Loading...</h1>
  }
  const { location_id, name, location_string, rating, photo } = (typeof restaurant !== 'undefined' && restaurant)
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
        <Button title="See More" path={`/restaurants/${location_id}`} />
      </div>
    </div>
  );
};

export default Restaurant;
