import React, { useContext, useEffect } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import "./styleMovieDetail.css";
import { MovieContext } from "../context/movieContextApi";
import Loading from "./Loading";
import ErrorMeassage from "./ErrorMessage";
import NoMovieMessage from "./NoMovieMessage,";

function MovieDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  function handleNavigation() {
    navigate(-1);
  }
  const {
    setSelectedMovie,
    selectedMovie,
    setError,
    setLoading,
    loading,
    error,
    AddtoFavourite,
  } = useContext(MovieContext);
  useEffect(() => {
    if (!id) return;

    async function fetchMovieDetail() {
      try {
        setLoading(true);
        setError(null);

        // Correct endpoint for movie by ID (use i= instead of s=)
        const URL = `https://www.omdbapi.com/?apikey=794bc197&i=${id}`;
        const response = await fetch(URL);
        const data = await response.json();

        if (data.Response === "True") {
          setSelectedMovie(data || "");
        } else {
          setError(data.Error || "Movie not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetail();
  }, [id]);

  if (loading && !error) return <Loading />;
  if (!loading && error) return <ErrorMeassage />;
  if (!selectedMovie)
    return (
      <NoMovieMessage>
        <p>No Data Found</p>
      </NoMovieMessage>
    );
  return (
    <div className="movie-detail">
      <img src={selectedMovie.Poster} alt="Poster" className="poster-img" />
      <div className="detail">
        <h2>
          {selectedMovie.Title} <span>{selectedMovie.imdbRating}⭐</span>
        </h2>
        <p className="selectedMovie-plot">{selectedMovie.Plot}</p>
        <div className="minor-detail">
          <p>
            Director: <span>{selectedMovie.Director}</span>
          </p>
          <p>
            Actors: <span>{selectedMovie.Actors}</span>
          </p>
          <p>
            Year: <span>{selectedMovie.Year}</span>
          </p>
          <p>
            Genre: <span>{selectedMovie.Genre}</span>
          </p>
          <p>
            Box Office: <span>{selectedMovie.BoxOffice}</span>
          </p>
          <div className="bottom-buttons">
            <button
              className="fav-btn"
              onClick={() => AddtoFavourite(selectedMovie)}
            >
              Add to Favourite
            </button>
            <button className="fav-btn" onClick={() => handleNavigation()}>
              ↩️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MovieDetail;
