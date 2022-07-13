import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import RestaurantBanner from "../../components/Banner/RestaurantBanner/RestaurantBanner";
import Restaurant from "../../components/Cards/Restaurant/Restaurant";
import { AppContext } from "../../context/context";
import "./Restaurants.scss";

const Restaurants = () => {
  const { restaurantList } = React.useContext(AppContext);
  const [pageNumber, setPageNumber] = useState(0);
  // const slicedHotels = hotelList.slice(0, 8)

  console.log(restaurantList);
  const restaurantsPerPage = 8;
  const pagesVisited = pageNumber * restaurantsPerPage;

  const displayRestaurants = restaurantList
    .slice(pagesVisited, pagesVisited + restaurantsPerPage)
    .map((restaurant) => {
      return <Restaurant restaurant={restaurant} />;
    });

  const pageCount = Math.ceil(restaurantList.length / restaurantsPerPage);

  const changePange = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div>
      <RestaurantBanner />
      <div className="hotels">
        <h1 className="title">
          Best <span>Restaurants</span>
        </h1>
        <div className="hotels-4x">{displayRestaurants}</div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePange}
          containerClassName={"paginationBttns"}
          previousClassName={"prevBtn"}
          nextClassName={"nextBtn"}
          disabledClassName={"pagination-disabled"}
          activeClassName={"pagination-active"}
        />
      </div>
    </div>
  );
};

export default Restaurants;
