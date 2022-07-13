import React from "react";
import "./App.css";
import { AppContext } from "./context/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Hotels from "./pages/Hotels/Hotels";
import Restaurants from "./pages/Restaurants/Restaurants";
import Attractions from "./pages/Attractions/Attractions";
import HotelDetails from "./pages/Details/HotelDetails/HotelDetails";
import RestaurantDetails from "./pages/Details/ResturantDetails/RestaurantDetails";
import AttractionDetails from "./pages/Details/AttractionDetails/AttractionDetails";


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
        <Route path="/restaurants/:id" element={<RestaurantDetails />} />
        <Route path="/attractions/:id" element={<AttractionDetails />} />
      </Routes>
    </Router>
  )
}

export default App;
