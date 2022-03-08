import React, { useState } from "react";
import { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "ionicons";
import "./styles.css";
import MovieCard from "./component/MovieCard";
import MovieDetails from "./component/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const apiKey = process.env.REACT_APP_MOVIES_API;
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");

  const search = async (title) => {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`
    );

    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    search(movies);
  }, []);

  return (
    <div className="App container">
      <h1>
        <a href="/" className="heading">
          Movie Box
        </a>
      </h1>
      <div className="search">
        <input
          placeholder="Search Movie"
          value={searchMovie}
          onChange={(e) => {
            setSearchMovie(e.target.value);
          }}
        />
        <svg
          onClick={() => {
            search(searchMovie);
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
          alt="search"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>
      {movies?.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <h2>Search Results: {movies?.length === "undefined" ? null : "0"}</h2>
      )}
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/moviedetails/:movieid"
            element={<MovieDetails />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
