import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import "./App.css";
import { MovieProvider } from "./context/movieContextApi";
import Searchbar from "./components/searchbar";
import MovieList from "./components/moviesList";
import MovieDetail from "./components/MovieDetail";
import FavouriteMovies from "./components/favouriteMovieList";
function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Searchbar />

        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/favourite" element={<FavouriteMovies />} />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;
