import React from "react";
import classes from "./ResultList.module.css";
import { useHttpTrailer } from "../hooks/useHttpTrailer";
import { trailerExtract } from "../util/trailerAccess.js";
import MovieDetail from "../components/middle/MovieDetail";

let dataTrailer = {};
export default function ResultList({ searchedData }) {
  const { inviMov, trailerData, isLoading, infoHandler } =
    useHttpTrailer(trailerExtract);
  return (
    <div className={classes["search-container"]}>
      <h2>Search Result</h2>
      <ul className={classes["search-list"]}>
        {searchedData.map((movie) => (
          <li>
            {" "}
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt=""
                className={classes.poster}
                onClick={() => {
                  infoHandler(movie);
                }}
              />
            ) : (
              <div className={classes.poster}>
                {" "}
                <h3>Not found</h3>{" "}
              </div>
            )}
          </li>
        ))}
      </ul>
      {/* Phần hiển thị thông tin khi người dùng click */}
      <div className={classes["info-container"]}>
        {inviMov && (
          <MovieDetail
            inviMov={inviMov}
            trailerData={trailerData}
          ></MovieDetail>
        )}
      </div>
    </div>
  );
}
