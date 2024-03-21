import React from "react";
import classes from "./MovieDetail.module.css";
export default function MovieDefault({ inviMov, trailerData }) {
  return (
    <div className={classes.info}>
      <section className={classes["trailer-info"]}>
        <h3>{inviMov.title || inviMov.name}</h3>
        <div>Release Date: {inviMov.release_date}</div>
        <div>Vote : {inviMov.vote_average}</div>
        <p>{inviMov.overview}</p>
      </section>
      <section className={classes["trailer-media"]}>
        {/* Nếu có trailer thì hiện trailer, không có sẽ hiện backdrop */}
        {trailerData ? (
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${trailerData.key}`}
          ></iframe>
        ) : (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original${inviMov.backdrop_path}`}
              alt=""
            />
          </div>
        )}
      </section>
    </div>
  );
}
