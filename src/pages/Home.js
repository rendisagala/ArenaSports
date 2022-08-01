import React from "react";
import NavigationBar from "../components/NavigationBar";
import HomeHero from "../components/HomeHero";
import LeagueList from "../components/LeagueList";
import Copyright from "../components/Copyright";

export default function Home() {
  return (
    <>
      <NavigationBar />
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
      <Copyright />
    </>
  );
}
