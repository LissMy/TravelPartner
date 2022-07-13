import React, { useState } from "react";
import HotelBanner from "../../components/Banner/HotelBanner/HotelBanner";
import Hotel from "../../components/Cards/Hotel/Hotel";
import ReactPaginate from "react-paginate";
import { AppContext } from "../../context/context";
import "./Hotels.scss";
import Filter from "../../components/Filter/Filter";

const Hotels = () => {
  const { hotelList } = React.useContext(AppContext);
  const [pageNumber, setPageNumber] = useState(0);
  // const slicedHotels = hotelList.slice(0, 8)

  const hotelsPerPage = 8;
  const pagesVisited = pageNumber * hotelsPerPage;

  const displayHotels = hotelList
    .slice(pagesVisited, pagesVisited + hotelsPerPage)
    .map((hotel) => {
      return <Hotel hotel={hotel} />;
    });

  const pageCount = Math.ceil(hotelList.length / hotelsPerPage);

  const changePange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <HotelBanner />
      <div className="hotels">
        <h1 className="title">
          Best <span>Hotels</span>
        </h1>
        <Filter />
        <div className="hotels-4x">{displayHotels}</div>
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
        {/* <div className="hotels-4x">
          {slicedHotels.map((hotel) => (
            <Hotel hotel={hotel} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Hotels;
