import React from "react";
import LatestNews from "../components/LatestNews";

export default function News() {
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center">LATEST NEWS</h1>
            <hr />
          </div>
        </div>
        <LatestNews />
      </div>
    </>
  );
}
