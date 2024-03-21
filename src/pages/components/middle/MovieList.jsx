import React from "react";
import { useState } from "react";
// import { useContext } from "react";
// import ApiContext from "../../store/api-contex";
import { useHttpTrailer } from "../../hooks/useHttpTrailer";
import { trailerExtract } from "../../util/trailerAccess.js";
import classes from "./MovieList.module.css";
import Movie from "./Movie";
import MovieDetail from "./MovieDetail";

export default function MovieList({ poster, movData }) {
  const { inviMov, trailerData, isLoading, infoHandler } =
    useHttpTrailer(trailerExtract);
  return (
    <div className={classes["mov-list"]}>
      {/* Phần hiển thị list phim */}
      <ul className={classes.movie}>
        {movData.results.map((data) => (
          <Movie
            infoPop={infoHandler}
            poster={poster}
            key={data.id}
            movData={data}
          ></Movie>
        ))}
      </ul>
      {/* Phần hiển thị thông tin khi người dùng click */}
      {inviMov && (
        <MovieDetail inviMov={inviMov} trailerData={trailerData}></MovieDetail>
      )}
    </div>
  );
}
