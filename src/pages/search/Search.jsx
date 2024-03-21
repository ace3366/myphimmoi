import React from "react";
import { useState } from "react";
import classes from "./Search.module.css";
import NavBar from "../components/upper/NavBar";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";

const API_KEY = "292c6915aed6c1ea24bb47d8b5d3ca92";

const Search = () => {
  const [searchFounded, setSearchFounded] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const sendRequest = async (query) => {
    setIsLoading(true);
    try {
      const request = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1`
      );
      const data = await request.json();
      setSearchFounded(data);
    } catch (err) {}
    setIsLoading(false);
  };
  console.log(searchFounded);
  return (
    <div className="app">
      <NavBar></NavBar>
      <SearchForm searchHandler={sendRequest}></SearchForm>
      {isLoading || (
        <ResultList searchedData={searchFounded.results}></ResultList>
      )}
      <div className={classes.footer}></div>
    </div>
  );
};

export default Search;
