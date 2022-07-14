import React from "react";
import "./MainBanner.scss";
import Button from "../../Button/Button";

const MainBanner = () => {
  return (
    <div className="banner-container">
      <div className="content">
        <h1>
          Your <br /> TravelPartner
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          nulla corrupti eum quia modi, harum odio magnam voluptatem, excepturi
          iusto fugit molestias cumque assumenda accusantium nostrum impedit.
          Ratione, esse incidunt.
        </p>
        <Button title="See Hotels" path='/hotels' />
      </div>
    </div>
  );
};

export default MainBanner;
