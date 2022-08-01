import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

const API1 = process.env.REACT_APP_STANDINGS_API;
const API2 = process.env.REACT_APP_NEWS_API;

export default function LatestNews() {
  const [league, setLeague] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLeague, setSelectedLeague] = useState("eng.1");
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      await axios.get(`${API1}`).then((result) => {
        result.data ? setLeague(result.data.data) : setLoading(true);
      });
      setLoading(false);
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      if (league.length === 0) setLoading(true);
      await axios.get(`${API2}/${selectedLeague}/news`).then((result) => {
        result ? setNews(result.data) : setLoading(true);
      });
      setLoading(false);
    };
    fetch();
  }, [selectedLeague]);

  const ShowNews = () => {
    return (
      <div className="p-5">
        {loading ? (
          <Loading />
        ) : (
          news.articles.map((data, index) => {
            return (
              <div className="row gx-5" key={index}>
                <div className="col-md-6 mb-4">
                  <div
                    className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={data.images[0].url}
                      className="img-fluid"
                      style={{ width: "100%" }}
                      alt={data.images[0].name}
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{
                          backgroundColor: `rgba(251, 251, 251, 0.15)`,
                        }}
                      ></div>
                    </a>
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
                    {data.lastModified.split("T").shift()}
                  </span>
                  <h4>
                    <strong>{data.headline}</strong>
                  </h4>
                  <p className="text-dark">{data.description}</p>
                  <a
                    href={data.links.web.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button type="button" className="btn btn-primary">
                      Get Details
                    </button>
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>
    );
  };

  const Rendered = () => {
    return (
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center">LATEST NEWS</h1>
            <hr />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="row d-flex">
            <select
              className="form-select mx-auto"
              aria-label="Default select example"
              onChange={(e) => setSelectedLeague(e.target.value)}
              value={selectedLeague}
            >
              {loading ? (
                <Loading />
              ) : (
                league.map((data, index) => {
                  return (
                    <option value={data.id} key={index}>
                      {data.name}
                    </option>
                  );
                })
              )}
            </select>
          </div>
          {loading ? <Loading /> : <ShowNews />}
        </div>
      </div>
    );
  };
  //
  console.log(news);

  return <>{loading ? <Loading /> : <Rendered />}</>;
}
