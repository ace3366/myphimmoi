import React from "react";
// import { useContext } from "react";
// import ApiContext from "../../store/api-contex";

import classes from "./Banner.module.css";
import { bannerAccess } from "../../util/bannerAccess.js";

let banner = {};
export default function Banner({ movData }) {
  // // Lấy url từ Context
  // const requests = useContext(ApiContext);
  // // Lấy data từ http request
  // const { movieData: ogData, isLoading: ogLoad } = useHttp(
  //   requests.fetchNetflixOriginals
  // );
  // Kiểm tra data đã load xong chưa để lấy banner ra và render

  banner = bannerAccess(movData);
  const imgPath = `https://image.tmdb.org/t/p/original${banner.backdrop_path}`;
  return (
    <div className={classes.banner}>
      <img className={classes["banner-img"]} src={imgPath} alt="banner" />
      <div className={classes.overlay}></div>
      <div className={classes.about}>
        <h2>{banner.name || banner.title}</h2>
        <button>Play</button>
        <button>My List</button>
        <p>{banner.overview.slice(0, 100)}...</p>
      </div>
    </div>
  );
}
