import React, { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_STANDINGS_API;

export default function Explore() {
  const [league, setLeague] = useState([]);
  const [data, setData] = useState([]);
  const [season, setSeason] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLeague, setSelectedLeague] = useState("eng.1");
  const [selectedSeason, setSelectedSeason] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  useEffect(() => {
    const getLeague = async () => {
      setLoading(true);
      await axios.get(`${API}`).then((result) => {
        setLeague(result.data.data);
        // setLoading(false);
      });
    };
    getLeague();
  }, []);

  useEffect(() => {
    const getSeason = async () => {
      setLoading(true);
      await axios.get(`${API}/eng.1/seasons`).then((result) => {
        setSeason(result.data.data.seasons);
      });
    };
    getSeason();
  }, []);

  const Loading = () => {
    return (
      <div className="row justify-content-center d-flex p-5">
        <div className="spinner-grow  " role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow  " role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow  " role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  };

  const ShowTable = () => {
    return (
      <div className="row d-flex">
        <select
          className="form-select mx-auto"
          aria-label="Default select example"
          onChange={(e) => setSelectedLeague(e.target.value)}
          value={selectedLeague}
        >
          {league.map((data, index) => {
            return (
              <option value={data.id} key={index}>
                {data.name}
              </option>
            );
          })}
        </select>
        <select
          className="form-select mx-auto"
          aria-label="Default select example"
          onChange={(e) => setSelectedSeason(e.target.value)}
          value={selectedSeason}
        >
          {season.slice(0, 7).map((data, index) => {
            return (
              <option value={data.year} key={index}>
                {data.year}/{data.year + 1}
              </option>
            );
          })}
        </select>
        <select
          className="form-select mx-auto"
          aria-label="Default select example"
          onChange={(e) => setSelectedSort(e.target.value)}
          value={selectedSort}
        >
          <option defaultValue value="asc">
            ascending
          </option>
          <option value="desc">descending</option>
        </select>
      </div>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center">STANDINGS TABLE</h1>
            <hr />
          </div>
        </div>

        <div className="row justify-content-center">
          <ShowTable />
          {loading ? <Loading /> : <ShowTable />}
        </div>
      </div>
    </div>
  );
}
