import React from "react";

export default function NavigationBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3 ">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">
            ARENASPORTS
          </a>
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
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#">
                  Reviews
                </a>
              </li>
            </ul>
          </div>
          <p>Spot Your Best Teams!</p>
        </div>
      </nav>
    </div>
  );
}
