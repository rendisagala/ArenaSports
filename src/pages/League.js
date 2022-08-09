import React from "react";

import Table from "../components/Table";

function Home() {
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center">STANDINGS TABLE</h1>
            <hr />
          </div>
        </div>
        <Table />
      </div>
    </>
  );
}

export default Home;
