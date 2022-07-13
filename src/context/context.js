import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

// const hotelOptions = {
//   method: "GET",
//   url: "https://travel-advisor.p.rapidapi.com/hotels/list",
//   params: {
//     location_id: "293919",
//     adults: "1",
//     rooms: "1",
//     nights: "2",
//     pricesmax: "100",
//     pricesmin: "10",
//     order: "asc",
//     sort: "recommended",
//   },
//   headers: {
//     "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
//     "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
//   },
// };


const restaurantOptions = {
  method: "GET",
  url: "https://travel-advisor.p.rapidapi.com/restaurants/list",
  params: {
    location_id: "293919",
    restaurant_tagcategory: "10591",
    restaurant_tagcategory_standalone: "10591",
    currency: "USD",
    lunit: "km",
    limit: "30",
    open_now: "false",
    lang: "en_US",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

const attractionOptions = {
  method: "GET",
  url: "https://travel-advisor.p.rapidapi.com/attractions/list",
  params: { location_id: "298571", sort: "recommended" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [hotelList, setHotelList] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);
  const [attractionList, setAttractionList] = useState([]);
  const [filterHotels, setFilterHotels] = useState({
    location_id: '293919',
    adults: '1',
    rooms: '1',
    nights: '2',
    checkin: '2022-08-15',
    offset: '0',
    currency: 'USD',
    order: 'asc',
    limit: '30',
    sort: 'recommended',
    lang: 'en_US'
  })

  
const hotelOptions = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/hotels/list',
  params: filterHotels,
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

  const fetchHotels = () => {
    axios
      .request(hotelOptions)
      .then((response) => {
        if (response) {
          setHotelList(response.data.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchRestaurants = () => {
    axios
      .request(restaurantOptions)
      .then(function (response) {
        if (response) {
          setRestaurantList(response.data.data);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const fetchAttractions = () => {
    axios
      .request(attractionOptions)
      .then(function (response) {
        setAttractionList(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchHotels();
    fetchRestaurants();
    fetchAttractions();
    console.log(filterHotels)
  }, [filterHotels]);

  console.log(hotelList);
  return (
    <AppContext.Provider value={{ hotelList, restaurantList, attractionList, filterHotels, setFilterHotels }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };
