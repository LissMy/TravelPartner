import React from "react";
import Banner from "../../components/Banner/MainBanner/MainBanner";
import Attraction from "../../components/Cards/Attraction/Attraction";
import Hotel from "../../components/Cards/Hotel/Hotel";
import Restaurant from "../../components/Cards/Restaurant/Restaurant";
import Loader from "../../components/Loader/Loader";
import { AppContext } from "../../context/context";
import "./Home.scss";

const Home = () => {
  const { hotelList, restaurantList, attractionList } =
    React.useContext(AppContext);
  const slicedHotel = hotelList?.slice(0, 4);
  const slicedRestaurant = restaurantList?.slice(0, 4);
  const slicedAttraction = attractionList?.slice(0, 4);
  return (
    <div>
      <Banner />
      
      <div className="hotels">
        <h1 className="title">
          Best <span>Hotels</span>
        </h1>
        <div className="hotels-4x">
          {slicedHotel?.map((hotel) => (
            <Hotel hotel={hotel} />
          ))}
        </div>
      </div>
      <div className="hotels">
        <h1 className="title">
          Best <span>Restaurants</span>
        </h1>
        <div className="hotels-4x">
          {slicedRestaurant?.map((restaurant) => (
            <Restaurant restaurant={restaurant} />
          ))}
        </div>
      </div>
      <div className="hotels">
        <h1 className="title">
          Best <span>Attractions</span>
        </h1>
        <div className="hotels-4x">
        {slicedAttraction?.map((attraction) => (
            <Attraction attraction={attraction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
