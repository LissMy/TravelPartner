import React, { useEffect, useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { AppContext } from "../../context/context";
import "./Filter.scss";

const Filter = () => {
  const { filterHotels, setFilterHotels } = React.useContext(AppContext);
  //   const [minPrice, setMinPrice] = useState("");
  //   const [maxPrice, setMaxPrice] = useState(10000);
  //   const [sortBy, setSortBy] = useState("");
  //   const [order, setOrder] = useState("");
  const [openFilter, setOpenFilter] = useState(false);

  const [filterInfo, setFilterInfo] = useState({
    pricesmin: "",
    pricesmax: "",
    sort: "",
    order: "",
  });

  useEffect(() => {
    setFilterHotels({
      ...filterHotels,
      ...filterInfo,
    });
  }, [filterInfo, filterHotels, setFilterHotels]);

  const toggleFilter = () => {
    setOpenFilter(!openFilter);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(filterInfo);
  };

  const handleChange = (event) => {
    setFilterInfo({ ...filterInfo, [event.target.name]: event.target.value });
  };

//   const clearFilterHandler = () => {
//     setFilterInfo({
//       pricesmin: "0",
//       pricesmax: "10000",
//       sort: "recommended",
//       order: "asc",
//     });
//   };

  if (!openFilter) {
    return (
      <div onClick={toggleFilter} className="filter-disabled">
        <IoFilterSharp /> <h6>Filter</h6>
      </div>
    );
  }

  return (
    <div>
      <div onClick={toggleFilter} className="filter-disabled">
        <IoFilterSharp /> <h6>Filter</h6>
      </div>
      <div className="form-control">
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="pricemin">Min Price: </label>
          <input
            onChange={handleChange}
            value={filterInfo.pricesmin}
            type="number"
            id="pricemin"
            name="pricesmin"
          />
          <label htmlFor="pricemax">Max Price: </label>
          <input
            onChange={handleChange}
            value={filterInfo.pricesmax}
            type="number"
            id="pricemax"
            name="pricesmax"
          />
          <label htmlFor="sortBy">Sort By: </label>
          <select
            id="sortBy"
            onChange={handleChange}
            name="sort"
            value={filterInfo.sort}
          >
            <option value="recommended">Recommended</option>
            <option value="popularity">Popularity</option>
            <option value="price">Price</option>
          </select>
          <label htmlFor="order">Order: </label>
          <select
            id="order"
            name="order"
            onChange={handleChange}
            value={filterInfo.order}
          >
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Filter;
