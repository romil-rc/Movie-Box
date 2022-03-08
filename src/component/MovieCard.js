import React from "react";
import "../styles/app.css";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="col">
        <div className="card outer-card">
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "data:image/png;base64,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"
            }
            className="card-img-top"
            alt={movie.Title}
          />
          <div className="card-body">
            <span className="">{movie.Type.toUpperCase()}</span>
            <h5 className="card-title">
              <a href={`/moviedetails/:${movie.Title}`}>{movie.Title}</a>
            </h5>
            <p className="card-text">{movie.Year}</p>
            <p>{movie.Plot}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
