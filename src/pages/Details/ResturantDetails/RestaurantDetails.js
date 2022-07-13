import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./RestaurantDetails.scss";

const RestaurantDetails = () => {
  const [restaurantDetail, setRestaurantDetail] = useState(null);
  const { id } = useParams();
  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/restaurants/get-details',
    params: {location_id: id},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
  const fetchRestaurant = async () => {
    axios
      .request(options)
      .then(function (response) {
        const restaurant = response.data;
        setRestaurantDetail(restaurant);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchRestaurant();
  }, [id]);


  if (restaurantDetail === "null") {
    return <h1>Loading...</h1>;
  }
  if (restaurantDetail) {
    const { name, location_string, rating, price, website, description, photo } = restaurantDetail
    return (
      <div className="hotelDetail">
        <img
          src={photo.images.original.url}
          alt={name}
        />
        <div className="detail-info">
          <h1>{name}</h1>
          <p>
            Location: <span>{ location_string }</span>
          </p>
          <p>
            Rating: <span>{ rating }</span>
          </p>
          <p>
            Price: <span>{ price }</span>
          </p>
          
          <p>
            Website: <span> {website} </span>
          </p>
          <p>
            {description}
          </p>
        </div>
      </div>
    );
  }
};

export default RestaurantDetails;
