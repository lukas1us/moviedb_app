import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Search = () => {
  //state
  const [detail, setDetail] = useState([]);

  //fetching data
  const url = "https://api.themoviedb.org/3";
  const api_key = "?api_key=7fa80c02919ec99dbdcded27866e19c3";
  const searchQuery = `${url}/search/movie${api_key}`;

  // push fetched data into detail state
  const querySearch = async (query) => {
    try {
      const { data } = await axios.get(searchQuery, {
        params: {
          language: "en_US",
          query: query,
        },
      });

      const posterUrl = "https://image.tmdb.org/t/p/original";
      const modifiedData = data["results"].map((result) => ({
        backdrop_path: posterUrl + result.backdrop_path,
        id: result.id,
        title: result.title,
        genre_ids: result.genre_ids,
        overview: result.overview,
        poster: posterUrl + result.poster_path,
        rating: result.vote_average,
      }));

      setDetail(modifiedData);
    } catch (error) {
      console.log(error);
    }
  };

  // pushes onChange value from input into fetching API function
  function handleChange(e) {
    querySearch(e.target.value);
  }

  // takes fetched data and returns exact movies
  function inputPosters(data) {
    const movies = data.slice(0, 8).map((item, index) => {
      if (item.poster !== "https://image.tmdb.org/t/p/originalnull") {
        return (
          <div key={index} className="searched-item">
            <Link to={`/moviedb_app/movie/${item.id}`}>
              <img className="no-poster" src={item.poster} alt={item.title} />
              <p>{item.title}</p>
            </Link>
          </div>
        );
      } else {
        return false;
      }
    });
    if (data) {
      return movies;
    }
  }

  return (
    <div className="search-container">
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search"
          name="searchbar"
          onChange={handleChange}
        />
      </div>
      <div className="search-output">{inputPosters(detail)}</div>
    </div>
  );
};

export default Search;
