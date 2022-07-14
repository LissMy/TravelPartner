import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./HotelDetails.scss";

const HotelDetails = () => {
  const [hotelDetail, setHotelDetail] = useState(null);
  const { id } = useParams();
  const options = {
    method: "GET",
    url: "https://travel-advisor.p.rapidapi.com/hotels/get-details",
    params: { location_id: id },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };
  const fetchHotel = async () => {
    axios
      .request(options)
      .then(function (response) {
        // const { data } = response.data;
        const hotel = response.data.data[0];
        setHotelDetail(hotel);
        // const { name, location_string, rating, price, awards, description } = hotel;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchHotel();
  }, [id]);

  console.log(hotelDetail);

  if (hotelDetail) {
    const { name, location_string, rating, price, awards, description, photo } =
      hotelDetail;
    return (
      <div className="hotelDetail">
        <img src={photo.images.original.url} alt={name} />
        <div className="detail-info">
          <h1>{name}</h1>
          <p>
            Location: <span>{location_string}</span>
          </p>
          <p>
            Rating: <span>{rating}</span>
          </p>
          <p>
            Price: <span>{price}</span>
          </p>

          <p>
            Awards:{" "}
            <span>
              {awards.length === 0 ? "No awards" : awards[0].display_name}
            </span>
          </p>
          <p>{description}</p>
        </div>
      </div>
    );
  }
};

export default HotelDetails;
