import React from "react";
import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import LatestNews from "../components/LatestNews";

export default function News() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <LatestNews />
    </>
  );
}
