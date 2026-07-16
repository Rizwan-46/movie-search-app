import { useState, useContext, createContext, useEffect } from "react";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovie] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState("");
  const [favouriteMovies, setFavouriteMovies] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("favourites"));
      return saved || [];
    } catch {
      return [];
    }
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function removeFromFavourite(movie) {
    const updateMoviesData = favouriteMovies.filter(
      (m) => m.imdbID !== movie.imdbID
    );
    setFavouriteMovies(updateMoviesData);
  }

  function AddtoFavourite(movie) {
    const isAlreadyExist = favouriteMovies.some(
      (fav) => fav.imdbID === movie.imdbID
    );
    if (!isAlreadyExist) {
      setFavouriteMovies([...favouriteMovies, movie]);
    }
  }
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favouriteMovies));
  }, [favouriteMovies]);

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovie,
        selectedMovie,
        setSelectedMovie,
        error,
        setError,
        loading,
        setLoading,
        AddtoFavourite,
        favouriteMovies,
        removeFromFavourite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
