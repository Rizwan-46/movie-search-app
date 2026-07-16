import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../context/movieContextApi";
import Loading from "./Loading";
import NoMovieMessage from "./NoMovieMessage,";
import ErrorMeassage from "./ErrorMessage";
import "./styleMovieList.css";

function SearchedMovie() {
  const { movies, error, loading } = useContext(MovieContext);

  if (loading && !error) return <Loading />;
  if (error && !loading) return <ErrorMeassage />;
  if (!movies.length)
    return (
      <NoMovieMessage>
        <p>No Movie Found</p>
      </NoMovieMessage>
    );

  return (
    <div className="movie-container">
      {movies.map((movie, i) => (
        <Movielist movie={movie} key={i + 1} />
      ))}
    </div>
  );
}

function Movielist({ movie, setIdtoSeeInfo }) {
  const navigate = useNavigate();
  return (
    <div className="movie" onClick={() => navigate(`/movie/${movie.imdbID}`)}>
      <img src={movie.Poster} alt="Poster" />
      <div className="detail">
        <div>
          <h4> {movie.Title}</h4>
          <p>
            <span>Released Date: </span> {movie.Year}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchedMovie;
