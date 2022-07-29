import React from "react";
import NavigationBar from "../components/NavigationBar";
import HeroOverlay from "../components/HeroOverlay";
import CurrentMatch from "../components/CurrentMatch";
import LatestNews from "../components/LatestNews";
import NextMatch from "../components/NextMatch";
import Videos from "../components/Videos";
import Article from "../components/Article";

const Home = () => {
  return (
    <div className="site-wrap">
      <NavigationBar />
      <HeroOverlay />
      <CurrentMatch />
      <LatestNews />
      <NextMatch />
      <Videos />
      <Article />
    </div>
  );
};

export default Home;
