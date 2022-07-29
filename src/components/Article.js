import React from "react";

function Article() {
  return (
    <div>
      {" "}
      <div className="container site-section">
        <div className="row">
          <div className="col-6 title-section">
            <h2 className="heading">Article</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="custom-media d-flex">
              <div className="img mr-4">
                <img src="images/img_1.jpg" alt="Image" className="img-fluid" />
              </div>
              <div className="text">
                <span className="meta">May 20, 2020</span>
                <h3 className="mb-4">
                  <a href="#">Romolu to stay at Real Nadrid?</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus deserunt saepe tempora dolorem.
                </p>
                <p>
                  <a href="#">Read more</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="custom-media d-flex">
              <div className="img mr-4">
                <img src="images/img_3.jpg" alt="Image" className="img-fluid" />
              </div>
              <div className="text">
                <span className="meta">May 20, 2020</span>
                <h3 className="mb-4">
                  <a href="#">Romolu to stay at Real Nadrid?</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus deserunt saepe tempora dolorem.
                </p>
                <p>
                  <a href="#">Read more</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
