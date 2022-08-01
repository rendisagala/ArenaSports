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
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <h5 className="card-title  display-3 fw-bolder mb-0">ARENASPORTS</h5>
          <p className="card-text lead">
            <span className="bg-danger">
              ArenaSports is a website that provides you all the information you
              need about football. Football Teams, Scores, Stats, News,
              Fixtures, Results, Tables. All you need about your favorite league
              is here. Enhance your football knowledge by digging through
              ArenaSports App.
            </span>
            <br />
          </p>
          <p className="card-text lead">
            <span className="bg-danger">
              ArenaSports made by{" "}
              <a
                className="text-light"
                target="_blank"
                href="https://github.com/rendisagala"
              >
                @rendisagala
              </a>{" "}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
