import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import nullImage from "../assets/image/null-image.png";

const API = process.env.REACT_APP_STANDINGS_API;

export default function Table() {
  const [league, setLeague] = useState([]);
  const [table, setTable] = useState([]);
  const [season, setSeason] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLeague, setSelectedLeague] = useState("eng.1");
  const [selectedSeason, setSelectedSeason] = useState("2022");
  const [selectedSort, setSelectedSort] = useState("asc");

  useEffect(() => {
    const fetch = async () => {
      await axios.get(`${API}`).then((result) => {
        if (result.data.length !== 0) setLeague(result.data.data);
      });
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      await axios.get(`${API}/${selectedLeague}/seasons`).then((result) => {
        if (result.data.length !== 0) setSeason(result.data.data.seasons);
      });
    };
    fetch();
  }, [selectedLeague]);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      await axios
        .get(
          `${API}/${selectedLeague}/standings?season=${selectedSeason}&sort=${selectedSort}`
        )
        .then((result) => {
          setTable(result.data.data.standings);
          setLoading(false);
        });
    };
    fetch();
  }, [selectedLeague, selectedSeason, selectedSort]);

  const ShowTable = () => {
    return (
      <>
        <table className="table pb-lg-5 m-5">
          <thead>
            <tr className="text-center">
              <th scope="col">Position</th>
              <th scope="col" className="w-50">
                Club
              </th>
              <th scope="col">Match Played</th>
              <th scope="col">Win</th>
              <th scope="col">Draw</th>
              <th scope="col">Lost</th>
              <th scope="col">GD</th>
              <th scope="col">Points</th>
            </tr>
          </thead>
          <tbody>
            {table.map((data, index) => {
              return (
                <tr key={index} className="text-center">
                  <th scope="row">
                    {data.stats.filter((e) => e.type === "rank")[0].value}
                  </th>
                  <td className=" club-name">
                    <img
                      src={
                        data.team.logos ? data.team.logos[0].href : nullImage
                      }
                      alt={data.team.abbreviation}
                      className="club-img mx-5"
                    />
                    {data.team.name}
                  </td>
                  <td>
                    {
                      data.stats.filter((e) => e.type === "gamesplayed")[0]
                        .value
                    }
                  </td>
                  <td>
                    {data.stats.filter((e) => e.type === "wins")[0].value}
                  </td>
                  <td>
                    {data.stats.filter((e) => e.type === "ties")[0].value}
                  </td>
                  <td>
                    {data.stats.filter((e) => e.type === "losses")[0].value}
                  </td>
                  <td>
                    {
                      data.stats.filter(
                        (e) => e.type === "pointdifferential"
                      )[0].value
                    }
                  </td>
                  <td>
                    {data.stats.filter((e) => e.type === "points")[0].value}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  };

  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center">STANDINGS TABLE</h1>
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
              {season.map((data, index) => {
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
          {loading ? <Loading /> : <ShowTable />}
        </div>
      </div>
    </>
  );
}
