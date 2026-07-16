import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState } from "react";
import "./styleSearchbar.css";

import { MovieContext } from "../context/movieContextApi";

const Searchbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchMovie, setSearchMovie] = useState("quantum");
  const handleInput = (e) => {
    setSearchMovie(e.target.value);
  };
  const { setMovie, setError, setLoading, movies } = useContext(MovieContext);
  useEffect(() => {
    if (searchMovie.length < 3) {
      setMovie([]);
      return;
    }
    async function fetchApi() {
      setLoading(true);
      setError(null);
      const URL = `https://www.omdbapi.com/?apikey=794bc197&s=${searchMovie}`;
      try {
        const response = await fetch(URL);
        const data = await response.json();

        if (data.Response === "True") {
          setMovie(data.Search || []);
          if (location.pathname !== "/") {
            navigate("/");
          }
        } else {
          setMovie([]);
          setError(data.Error || "No Movie Found");
        }
      } catch (error) {
        console.log(error, "coming from api");
        setMovie([]);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchApi();
  }, [searchMovie, setMovie]);

  return (
    <div className="searchbar-div">
      <h2>CineScope</h2>
      <input
        type="text"
        placeholder="Search Here"
        className="searchbar"
        onChange={handleInput}
        value={searchMovie}
      />
      <Link to="/favourite">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 48 48"
        >
          <path
            fill="#eb6773"
            d="M37,6c0-1.105-0.895-2-2-2H13c-1.105,0-2,0.895-2,2v4h26V6z"
          ></path>
          <path
            fill="#b31523"
            d="M11,41.72c0,0.996,1.092,1.606,1.94,1.084L24,35.998l11.06,6.806C35.908,43.326,37,42.716,37,41.72	V30H11V41.72z"
          ></path>
          <rect width="26" height="12" x="11" y="18" fill="#cf1928"></rect>
          <rect width="26" height="8" x="11" y="10" fill="#d9414f"></rect>
          <path
            d="M37,13.868c-0.143,0.134-0.27,0.287-0.354,0.476l-2.417,5.419l-5.902,0.623	c-0.59,0.063-1.07,0.454-1.253,1.019c-0.184,0.565-0.023,1.164,0.418,1.56l4.408,3.973l-1.232,5.805	c-0.093,0.439,0.015,0.892,0.297,1.24c0.28,0.346,0.712,0.553,1.155,0.553c0.256,0,0.512-0.068,0.741-0.199L37,31.947V13.868z"
            opacity=".05"
          ></path>
          <path
            d="M37,14.777l-2.431,5.453l-6.188,0.653c-0.392,0.042-0.71,0.302-0.831,0.676	c-0.122,0.375-0.015,0.771,0.277,1.034l4.622,4.165l-1.292,6.087c-0.062,0.292,0.01,0.592,0.196,0.822s0.473,0.367,0.767,0.367	c0.17,0,0.34-0.046,0.491-0.132L37,31.37V14.777z"
            opacity=".07"
          ></path>
          <linearGradient
            id="sVVMIiOtUETG57~p7RkEia_ODpuHNgfyltD_gr1"
            x1="30.747"
            x2="44.819"
            y1="-371.32"
            y2="-390.147"
            gradientTransform="matrix(1 0 0 -1 0 -356)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#ffda1c"></stop>
            <stop offset="1" stop-color="#feb705"></stop>
          </linearGradient>
          <path
            fill="url(#sVVMIiOtUETG57~p7RkEia_ODpuHNgfyltD_gr1)"
            d="M38.442,14.751l2.651,5.946l6.474,0.684c0.417,0.044,0.584,0.56,0.273,0.841l-4.836,4.358	l1.351,6.369c0.087,0.41-0.352,0.729-0.715,0.52L38,30.215l-5.639,3.253c-0.363,0.209-0.802-0.11-0.715-0.52l1.351-6.369	l-4.836-4.358c-0.311-0.28-0.143-0.797,0.273-0.841l6.474-0.684l2.651-5.946C37.728,14.369,38.271,14.369,38.442,14.751z"
          ></path>
        </svg>
      </Link>
    </div>
  );
};

export default Searchbar;
