import React from "react";

export default function Movie({ poster, movData, infoPop }) {
  return (
    <li>
      <img
        src={`https://image.tmdb.org/t/p/original${
          poster ? movData.poster_path : movData.backdrop_path
        }`}
        alt=""
        onClick={() => {
          infoPop(movData);
        }}
      />
    </li>
  );
}
