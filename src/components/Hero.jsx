import React from "react";
import backgroundImage from "../assets/image/book-bg.jpg";

export default function Hero() {
  return (
    <div>
      <div className="card text-light ">
        <img
          src={backgroundImage}
          className="card-img  "
          alt="backgroundImage"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <h5 className="card-title display-3 fw-bolder mb-0">ARENASPORTS</h5>
          <p className="card-text lead">
            “You were born to be a player. You were meant to be here. This
            moment is yours.” —Herb Brooks{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
