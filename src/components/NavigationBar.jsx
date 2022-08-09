import React from "react";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white py-3 ">
        <div className="container">
          <Link to="/">
            <div className="navbar-brand fw-bold fs-4 link">ARENASPORTS</div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <Link to="/home">
                <li className="nav-item">
                  <div className="nav-link active" aria-current="page">
                    Home
                  </div>
                </li>
              </Link>
              <Link to="/news">
                <li className="nav-item ">
                  <div className="nav-link active" aria-current="page">
                    News
                  </div>
                </li>
              </Link>
              <Link to="/league">
                <li className="nav-item ">
                  <div className="nav-link active" aria-current="page">
                    Leagues
                  </div>
                </li>
              </Link>
              <Link to="/players">
                <li className="nav-item ">
                  <div className="nav-link active" aria-current="page">
                    Players
                  </div>
                </li>
              </Link>
              <Link to="/about">
                <li className="nav-item ">
                  <div className="nav-link active" aria-current="page">
                    About
                  </div>
                </li>
              </Link>
            </ul>
          </div>
          <p>Spot Your Best Teams!</p>
        </div>
      </nav>
    </>
  );
}
