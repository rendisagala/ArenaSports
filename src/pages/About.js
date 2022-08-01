import React from "react";
import AboutHero from "../components/AboutHero";
import NavigationBar from "../components/NavigationBar";
import Copyright from "../components/Copyright";
import OptionHero from "../components/OptionHero";

export default function About() {
  return (
    <>
      <NavigationBar />
      <AboutHero />
      <OptionHero />
      <Copyright />
    </>
  );
}
