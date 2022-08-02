import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Loading from "./Loading";

const API = process.env.REACT_APP_STANDINGS_API;

export default function LeagueList() {
  const [league, setLeague] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      const response = await axios.get(`${API}`);
      setLeague(response.data.data);
      setLoading(false);
    };
    fetch();
  }, []);
  {
    console.log(league);
  }

  if (league.length > 0) {
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
  } else {
    <Loading />;
  }
  // return <>{league.length !== 0 ? <Rendered /> : <Loading />}</>;
}
