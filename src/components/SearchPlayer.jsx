import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import nullImage from "../assets/image/null-player.png";

export default function SearchPlayer() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("Phil");
  const [result, setResult] = useState([]);

  const API = process.env.REACT_APP_PLAYERS_API;
  const regExp = /[a-zA-Z]/g;

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      await axios.get(`${API}?p=${search}`).then((result) => {
        setResult(
          result.data.player?.filter((data) => data.strSport === "Soccer")
        );
      });
      setLoading(false);
    };
    if (regExp.test(search)) fetch();
  }, [search]);

  return (
    <>
      <div className="row my-5">
        <div className="col-12 ">
          <h1 className="display-6 fw-bolder text-center">SEARCH PLAYER</h1>
          <hr />
        </div>
        <div className="form-outline">
          <input
            type="search"
            id="form1"
            className="form-control"
            placeholder="Example : 'Phil Jones'"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="row rounded-circle">
        {!loading ? (
          result?.map((data, index) => {
            return (
              <div className="card col-3 p-2" key={index}>
                <img
                  className="card-img-top "
                  src={data.strThumb ? data.strThumb : nullImage}
                  alt="Card image cap"
                />

                <div className="card-body player">
                  <h4 className="card-title lead fw-bold">
                    <a>{data.strPlayer}</a>
                  </h4>
                  <p className="card-text">{data.strDescriptionEN}</p>
                  <p className="">
                    {data.strNationality} / {data.strTeam}
                  </p>
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
