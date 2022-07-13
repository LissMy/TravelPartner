import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const hotelUrl = "https://travel-advisor.p.rapidapi.com/hotels/list";
const options = {
  method: "GET",
  url: "https://travel-advisor.p.rapidapi.com/hotels/list",
  params: {
    location_id: "293919",
    adults: "1",
    rooms: "1",
    nights: "2",
    offset: "0",
    currency: "USD",
    order: "asc",
    limit: "30",
    sort: "recommended",
    lang: "en_US",
  },
  // headers: {
  //   "X-RapidAPI-Key": "f085f415a0mshe64373e3890a631p14ff0ejsn4f98c0d0d159",
  //   "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  // },
};

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [hotelList, setHotelList] = useState([]);

  const fetchApi = () => {
    axios
      .request(options)
      .then((response) => {
        setHotelList(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <AppContext.Provider value={{ hotelList }}>{children}</AppContext.Provider>
  );
};
export { AppContext, AppProvider };
