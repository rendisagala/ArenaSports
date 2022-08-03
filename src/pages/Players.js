import React from "react";
import NavigationBar from "../components/NavigationBar";
import Copyright from "../components/Copyright";
import SearchPlayer from "../components/SearchPlayer";

export default function Players() {
  return (
    <>
      <NavigationBar />
      <SearchPlayer />
      <Copyright />
    </>
  );
}
