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
      <LeagueList />
      <Copyright />
    </>
  );
}
