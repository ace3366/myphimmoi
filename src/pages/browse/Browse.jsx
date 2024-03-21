import React from "react";
// import { useState, useEffect } from "react";
import classes from "./Browse.module.css";

// import { useContext } from "react";
// import ApiContext from "../store/api-contex";
import { useHttpAll } from "../hooks/useHttpAll";

import NavBar from "../components/upper/NavBar";
import Banner from "../components/upper/Banner";
import MovieList from "../components/middle/MovieList";

const API_KEY = "292c6915aed6c1ea24bb47d8b5d3ca92";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};
const category = [
  "original",
  "trending",
  "topRated",
  "action",
  "comedy",
  "horror",
  "romance",
  "document",
];
const newRequest = Object.entries(requests).slice(0, -1);
function Browse() {
  // console.log(newRequest);
  const { movieData: movData, isLoading: movLoad } = useHttpAll(newRequest);

  const reqMov = category.reduce((acc, key, index) => {
    acc[key] = movData[index];
    return acc;
  }, {});

  // console.log(reqMov);
  // Kiểm tra data đã nhận được chưa để render ra web
  if (!movLoad) {
    return (
      <div className="app">
        <div className={classes.upper}>
          {" "}
          <NavBar></NavBar>
          <Banner movData={reqMov.original}></Banner>
        </div>
        <div className={classes.middle}>
          <div className={classes.og}>
            <MovieList poster={true} movData={reqMov.original}></MovieList>
          </div>
          <div className={classes["the-others"]}>
            <div className={classes["movie-section"]}>
              {" "}
              <h2>Xếp hạng cao</h2>
              <MovieList movData={reqMov.topRated}></MovieList>
            </div>

            <div className={classes["movie-section"]}>
              <h2>Hành động</h2>
              <MovieList movData={reqMov.action}></MovieList>
            </div>

            <div className={classes["movie-section"]}>
              <h2>Hài</h2>
              <MovieList movData={reqMov.comedy}></MovieList>
            </div>

            <div className={classes["movie-section"]}>
              {" "}
              <h2>Kinh dị</h2>
              <MovieList movData={reqMov.horror}></MovieList>
            </div>

            <div className={classes["movie-section"]}>
              {" "}
              <h2>Lãng mạn</h2>
              <MovieList movData={reqMov.romance}></MovieList>
            </div>

            <div className={classes["movie-section"]}>
              {" "}
              <h2>Tài liệu</h2>
              <MovieList movData={reqMov.document}></MovieList>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Browse;
