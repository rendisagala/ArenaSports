import React from "react";
import leaguesImage from "../assets/image/leagues.jpeg";
import newsImage from "../assets/image/news.jpeg";
import playersImage from "../assets/image/players.jpeg";

export default function OptionHero() {
  return (
    <>
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
        <div className="card col-sm">
          <img
            src={playersImage}
            className="card-img-top"
            style={{ width: "100%", height: "15vw", objectFit: "cover" }}
            alt="..."
          />
          <div className="card-body">
            <a href="/news" style={{ textDecoration: "none" }}>
              <h5 className="card-title  text-dark">Players</h5>
            </a>
            <p className="card-text">
              All football players information that you need is here. Find your
              favorite football player in ArenaSports.
            </p>
          </div>
          <a type="button" className="btn btn-danger" href="/players">
            Read More
          </a>
        </div>
      </div>
    </>
  );
}
