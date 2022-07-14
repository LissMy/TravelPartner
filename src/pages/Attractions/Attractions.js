import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import AttractionsBanner from "../../components/Banner/AttractionsBanner/AttractionsBanner";
import Attraction from "../../components/Cards/Attraction/Attraction";
import Filter from "../../components/Filter/Filter";
import { AppContext } from "../../context/context";
import "./Attractions.scss";

const Attractions = () => {
  const { attractionList } = React.useContext(AppContext);
  const [pageNumber, setPageNumber] = useState(0);
  // const slicedHotels = hotelList.slice(0, 8)

  console.log(attractionList);
  const attractionsPerPage = 8;
  const pagesVisited = pageNumber * attractionsPerPage;

  const displayAttractions = attractionList
    .slice(pagesVisited, pagesVisited + attractionsPerPage)
    .map((attraction) => {
      return <Attraction attraction={attraction} />;
    });

  const pageCount = Math.ceil(attractionList.length / attractionsPerPage);

  const changePange = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div>
      <AttractionsBanner />
      <div className="hotels">
        <h1 className="title">
          Best <span>Attractions</span>
        </h1>
        <Filter />
        <div className="hotels-4x">{displayAttractions}</div>
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

export default Attractions;
