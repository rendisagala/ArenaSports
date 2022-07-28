import React from "react";
import NavigationBar from "../components/NavigationBar";
import HeroOverlay from "../components/HeroOverlay";
import CurrentMatch from "../components/CurrentMatch";
import LatestNews from "../components/LatestNews";
import NextMatch from "../components/NextMatch";

const Home = () => {
  return (
    <div className="site-wrap">
      <NavigationBar />
      <HeroOverlay />
      <CurrentMatch />
      <LatestNews />
      <NextMatch />
    </div>
  );
};

export default Home;
