import React from "react";
import "./HotelDetails.scss";

const HotelDetails = () => {
  return (
    <div className="hotelDetail">
      <img
        src="https://media-cdn.tripadvisor.com/media/photo-o/15/88/f0/ad/centre-point-hotel-pattaya.jpg"
        alt=""
      />
      <div className="detail-info">
        <h1>Centre Point Hotel Pattaya</h1>
        <p>
          Location: <span>Pattaya, Chonburi Province</span>
        </p>
        <p>
          Rating: <span>4.0</span>
        </p>
        <p>
          Price: <span>$26 - $50</span>
        </p>
        <p>
          Awards: <span>Certificate of Excellence 2021</span>
        </p>
        <p>
          Centre Point Hotel Pattaya is an excellent choice for travelers
          visiting Pattaya, offering a luxury environment alongside many helpful
          amenities designed to enhance your stay. The rooms offer air
          conditioning, a minibar, and a refrigerator, and getting online is
          possible, as free wifi is available, allowing you to rest and refresh
          with ease. Centre Point Hotel Pattaya features a concierge and room
          service. In addition, as a valued Centre Point Hotel Pattaya guest,
          you can enjoy a pool and free breakfast that are available on-site.
          Guests arriving by vehicle have access to free parking. While staying
          at Centre Point Hotel Pattaya, visitors can check out Tiffany's Show
          Pattaya (1.3 mi) and Beach road (1.5 mi), some of Pattaya's top
          attractions. While you’re here, be sure to check out some of the
          Mediterranean restaurants, including Mantra Restaurant & Bar, GROTTINO
          Osteria Pizzeria, and Greek Garden Taverna Pattayanis, all of which
          are a short distance from Centre Point Hotel Pattaya. If you are
          interested in exploring Pattaya, check out a , such as Love Art Park.
          Enjoy your stay in Pattaya!
        </p>
      </div>
    </div>
  );
};

export default HotelDetails;
