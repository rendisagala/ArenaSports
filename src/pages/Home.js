import React from "react";
import HomeHero from "../components/HomeHero";
import LeagueList from "../components/LeagueList";

export default function Home() {
  return (
    <>
      <HomeHero />
      <div className="row mt-5">
        <div className="col-12">
          <h3 className="display-6 fw-bolder text-center">
            Choose Your Favorite League in ArenaSports!!
          </h3>
          <hr />
        </div>
      </div>
      <LeagueList />
    </>
  );
}
