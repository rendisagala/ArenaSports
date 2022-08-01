import React from "react";
import backgroundImage from "../assets/image/ball.jpg";

export default function AboutHero() {
  return (
    <>
      <div className="card text-light  ">
        <img
          src={backgroundImage}
          className="card-img  "
          alt="backgroundImage"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column ">
          <h5 className="card-title  display-3 fw-bolder mb-0">ARENASPORTS</h5>
          <p className="card-text lead">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            beatae dolore ducimus corrupti sint tenetur autem nulla ex eaque.
            Itaque sapiente consequuntur dolores aut voluptates ex omnis eveniet
            unde delectus.
          </p>
        </div>
      </div>
    </>
  );
}
