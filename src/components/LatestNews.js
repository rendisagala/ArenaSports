import React from "react";

function LatestNews() {
  return (
    <div>
      <div className="latest-news">
        <div className="container">
          <div className="row">
            <div className="col-12 title-section">
              <h2 className="heading">Latest News</h2>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-4">
              <div className="post-entry">
                <a href="#">
                  <img
                    src="images/img_1.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div className="caption">
                  <div className="caption-inner">
                    <h3 className="mb-3">Romolu to stay at Real Nadrid?</h3>
                    <div className="author d-flex align-items-center">
                      <div className="img mb-2 mr-3">
                        <img src="images/person_1.jpg" alt="" />
                      </div>
                      <div className="text">
                        <h4>Mellissa Allison</h4>
                        <span>May 19, 2020 &bullet; Sports</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="post-entry">
                <a href="#">
                  <img
                    src="images/img_3.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div className="caption">
                  <div className="caption-inner">
                    <h3 className="mb-3">
                      Kai Nets Double To Secure Comfortable Away Win
                    </h3>
                    <div className="author d-flex align-items-center">
                      <div className="img mb-2 mr-3">
                        <img src="images/person_1.jpg" alt="" />
                      </div>
                      <div className="text">
                        <h4>Mellissa Allison</h4>
                        <span>May 19, 2020 &bullet; Sports</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="post-entry">
                <a href="#">
                  <img
                    src="images/img_2.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div className="caption">
                  <div className="caption-inner">
                    <h3 className="mb-3">Dogba set for Juvendu return?</h3>
                    <div className="author d-flex align-items-center">
                      <div className="img mb-2 mr-3">
                        <img src="images/person_1.jpg" alt="" />
                      </div>
                      <div className="text">
                        <h4>Mellissa Allison</h4>
                        <span>May 19, 2020 &bullet; Sports</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
