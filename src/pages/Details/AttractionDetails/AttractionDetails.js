import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./AttractionDetails.scss";

const AttractionDetails = () => {
  const [attractionDetail, setAttractionDetail] = useState(null);
  const { id } = useParams();
  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/attractions/get-details',
    params: {location_id: id},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };

  const fetchAttraction = async () => {
    axios
      .request(options)
      .then(function (response) {
        const attraction = response.data;
        setAttractionDetail(attraction);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchAttraction();
  }, [id]);


  if (attractionDetail === "null") {
    return <h1>Loading...</h1>;
  }
  if (attractionDetail) {
    const { name, location_string, rating, email, website, description, photo } = attractionDetail
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
            Email: <span>{ email }</span>
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

export default AttractionDetails;
