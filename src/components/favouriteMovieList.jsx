import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../context/movieContextApi";
import "./styleMovieList.css";
function FavouriteMovies() {
  const { favouriteMovies, removeFromFavourite } = useContext(MovieContext);

  return (
    <div className="movie-container">
      {favouriteMovies.length > 0 ? (
        favouriteMovies.map((movie, i) => (
          <Movielist
            movie={movie}
            key={i + 1}
            removeFromFavourite={removeFromFavourite}
          />
        ))
      ) : (
        <div className="empty">Empty Favoutite List</div>
      )}
    </div>
  );
}

function Movielist({ movie, removeFromFavourite }) {
  const navigate = useNavigate();
  return (
    <div className="movie">
      <img
        src={movie.Poster}
        alt="Poster"
        onClick={() => navigate(`/movie/${movie.imdbID}`)}
      />
      <div className="detail">
        <div>
          <h4> {movie.Title}</h4>
          <p>
            <span>Released Date: </span> {movie.Year}
          </p>
        </div>
      </div>
      <div className="cross-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => removeFromFavourite(movie)}
          x="0px"
          y="0px"
          width="12"
          height="12"
          viewBox="0 0 32 32"
        >
          <linearGradient
            id="1rsYkBQg--ZOjOQk1rj-Wa_nTkpTS1GZpkb_gr1"
            x1="16"
            x2="16"
            y1="2.888"
            y2="29.012"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#ff624a"></stop>
            <stop offset=".247" stop-color="#ff5940"></stop>
            <stop offset=".672" stop-color="#fd4224"></stop>
            <stop offset="1" stop-color="#fc2c0a"></stop>
          </linearGradient>
          <circle
            cx="16"
            cy="16"
            r="13"
            fill="url(#1rsYkBQg--ZOjOQk1rj-Wa_nTkpTS1GZpkb_gr1)"
          ></circle>
          <g opacity=".2">
            <linearGradient
              id="1rsYkBQg--ZOjOQk1rj-Wb_nTkpTS1GZpkb_gr2"
              x1="16"
              x2="16"
              y1="10.755"
              y2="21.245"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-opacity=".1"></stop>
              <stop offset="1" stop-opacity=".7"></stop>
            </linearGradient>
            <path
              fill="url(#1rsYkBQg--ZOjOQk1rj-Wb_nTkpTS1GZpkb_gr2)"
              d="M19.995,10.755 c-0.334,0-0.648,0.13-0.884,0.366L16,14.232l-3.111-3.111c-0.236-0.236-0.55-0.366-0.884-0.366c-0.334,0-0.648,0.13-0.884,0.366 c-0.487,0.487-0.487,1.28,0,1.768L14.232,16l-3.111,3.111c-0.487,0.487-0.487,1.28,0,1.768c0.236,0.236,0.55,0.366,0.884,0.366 c0.334,0,0.648-0.13,0.884-0.366L16,17.768l3.111,3.111c0.236,0.236,0.55,0.366,0.884,0.366s0.648-0.13,0.884-0.366 c0.487-0.487,0.487-1.28,0-1.768L17.768,16l3.111-3.111c0.487-0.487,0.487-1.28,0-1.768C20.643,10.885,20.329,10.755,19.995,10.755 L19.995,10.755z"
            ></path>
          </g>
          <linearGradient
            id="1rsYkBQg--ZOjOQk1rj-Wc_nTkpTS1GZpkb_gr3"
            x1="16"
            x2="16"
            y1="3"
            y2="29"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-opacity=".02"></stop>
            <stop offset="1" stop-opacity=".15"></stop>
          </linearGradient>
          <path
            fill="url(#1rsYkBQg--ZOjOQk1rj-Wc_nTkpTS1GZpkb_gr3)"
            d="M16,3.25c7.03,0,12.75,5.72,12.75,12.75 S23.03,28.75,16,28.75S3.25,23.03,3.25,16S8.97,3.25,16,3.25 M16,3C8.82,3,3,8.82,3,16s5.82,13,13,13s13-5.82,13-13S23.18,3,16,3 L16,3z"
          ></path>
          <path
            fill="#fff"
            d="M17.414,16l3.288-3.288c0.391-0.391,0.391-1.024,0-1.414c-0.391-0.391-1.024-0.391-1.414,0L16,14.586	l-3.288-3.288c-0.391-0.391-1.024-0.391-1.414,0c-0.391,0.391-0.391,1.024,0,1.414L14.586,16l-3.288,3.288	c-0.391,0.391-0.391,1.024,0,1.414c0.391,0.391,1.024,0.391,1.414,0L16,17.414l3.288,3.288c0.391,0.391,1.024,0.391,1.414,0	c0.391-0.391,0.391-1.024,0-1.414L17.414,16z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default FavouriteMovies;
