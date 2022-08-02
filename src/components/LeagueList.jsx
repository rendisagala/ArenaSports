import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

const API = process.env.REACT_APP_STANDINGS_API;

export default function LeagueList() {
  const [league, setLeague] = useState([]);
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`${API}`);
      setLeague(response.data.data);
    };
    fetch();
    return () => {
      console.log(league);
      setLoading(false);
    };
  }, []);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4 py-5">
        {league ? (
          league.map((data, index) => {
            return (
              <div className="col" key={index}>
                <div className="card h-100">
                  <a href="/league">
                    <img
                      src={data.logos.light}
                      className="card-img-top"
                      alt="..."
                    />
                  </a>
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold lead">{data.name}</h5>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}
