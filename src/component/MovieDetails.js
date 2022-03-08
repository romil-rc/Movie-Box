import React, { useEffect, useState } from "react";

const MovieDetails = () => {
  let windowLink = window.location.href;
  let movieLink = windowLink.substring(getPosition(windowLink, ":", 2) + 1);
  function getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
  }
  const apiKey = process.env.REACT_APP_MOVIES_API;
  let url = `https://www.omdbapi.com/?t=${movieLink}&apikey=${apiKey}`;

  const [movie, setMovie] = useState([]);

  const movieDet = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMovie(data);
  };
  useEffect(() => {
    movieDet();
  }, []);
  return (
    <>
      <div className="mt-3">
        <h1>{movie.Title}</h1>
        <p>{movie.Genre}</p>
        <img src={movie.Poster} alt={movie.Title} />
        <h3 className="text-start mt-5">Plot:</h3>
        <p className="text-start">{movie.Plot}</p>
        <p className="text-start">Director: {movie.Director}</p>
        <p className="text-start">Writer: {movie.Writer}</p>
        <p className="text-start">Actors: {movie.Actors}</p>
        <p className="text-start">Language: {movie.Language}</p>
        <p className="text-start">Country: {movie.Country}</p>
        <p className="text-start">imdb Rating: {movie.imdbRating}</p>
        <p className="text-start">Awards: {movie.Awards}</p>
        <p className="text-start">Box Office: {movie.BoxOffice}</p>
        <p className="text-start">Release Date: {movie.Released}</p>
        <p className="text-start">Runtime: {movie.Runtime}</p>
      </div>
    </>
  );
};

export default MovieDetails;
