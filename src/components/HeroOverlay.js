import React from "react";
import background from "../assets/images/bg_2.jpg";

const HeroOverlay = () => {
  return (
    <div>
      <div
        className="hero overlay"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 ml-auto">
              <h1 className="text-white">World Cup Event</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Soluta, molestias repudiandae pariatur.
              </p>
              <div id="date-countdown"></div>
              <p>
                <a href="#" className="btn btn-primary py-3 px-4 mr-3">
                  Book Ticket
                </a>
                <a href="#" className="more light">
                  Learn More
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOverlay;
