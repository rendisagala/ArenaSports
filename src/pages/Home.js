import React from "react";
import NavigationBar from "../components/NavigationBar";
import HomeHero from "../components/HomeHero";
import Copyright from "../components/Copyright";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <HomeHero />
      <Copyright />
    </>
  );
}
