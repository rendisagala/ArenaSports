import React from "react";
import backgroundImage from "../assets/image/hero-bg.jpg";
import leaguesImage from "../assets/image/leagues.jpeg";
import teamsImage from "../assets/image/teams.jpeg";
import newsImage from "../assets/image/news.jpeg";

export default function HomeHero() {
  return (
    <>
      <div className="card text-light ">
        <img
          src={backgroundImage}
          className="card-img  "
          alt="backgroundImage"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <h5 className="card-title  display-3 fw-bolder mb-0">ARENASPORTS</h5>
          <p className="card-text lead">
            “You were born to be a player. You were meant to be here. This
            moment is yours.” —Herb Brooks{" "}
          </p>
        </div>
      </div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center">
              ALL ABOUT FOOTBALL IS HERE!!
            </h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="card-deck row">
        <div className="card col-sm">
          <img
            src={leaguesImage}
            style={{ width: "100%", height: "15vw", objectFit: "cover" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <a href="/league" style={{ textDecoration: "none" }}>
              <h5 className="card-title  text-dark">League</h5>
            </a>
            <p className="card-text">
              Football Teams, Scores, Stats, News, Fixtures, Results, Tables.
              All you need about your favorite league is here!!
            </p>
          </div>
          <a type="button" className="btn btn-danger" href="/league">
            Read More
          </a>
        </div>
        <div className="card col-sm">
          <img
            src={newsImage}
            className="card-img-top"
            style={{ width: "100%", height: "15vw", objectFit: "cover" }}
            alt="..."
          />
          <div className="card-body">
            <a href="/news" style={{ textDecoration: "none" }}>
              <h5 className="card-title  text-dark">News</h5>
            </a>
            <p className="card-text">
              Enhance your football knowledge with all the news about your
              favorite league.
            </p>
          </div>
          <a type="button" className="btn btn-danger" href="/news">
            Read More
          </a>
        </div>
      </div>
    </>
  );
}
