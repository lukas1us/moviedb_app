import React, { useState, useEffect } from "react";
import "./App.scss";
import {
  Header,
  PopularMovies,
  PopularShows,
  Family,
  Documentary,
} from "./components";
import {
  //fetchData,
  moviesPopular,
  showsPopular,
  familyData,
  documentaryData,
  getPosters,
} from "./api/index";

export default function App() {
  //state
  //const [data, setData] = useState({});
  const [popularM, setPopularM] = useState({});
  const [popularS, setPopularS] = useState({});
  const [family, setFamily] = useState({});
  const [documentary, setDocumentary] = useState({});

  useEffect(() => {
    //fetched data
    // const fetchedData = async () => {
    //   const result = await fetchData();
    //   setData(result);
    // };
    //fetched popular movies
    const moviePopular = async () => {
      const result = await moviesPopular();
      setPopularM(result);
      getPosters(popularM);
    };
    //fetched popular tv shows
    const showPopular = async () => {
      const result = await showsPopular();
      setPopularS(result);
      getPosters(popularS);
    };
    //fetched family movies
    const moviesFamily = async () => {
      const result = await familyData();
      setFamily(result);
      getPosters(family);
    };
    //fetched documentary movies
    const moviesDocumentary = async () => {
      const result = await documentaryData();
      setDocumentary(result);
      getPosters(documentary);
    };
    //fetchedData();
    moviePopular();
    showPopular();
    moviesFamily();
    moviesDocumentary();
  }, []);

  return (
    <div className="container">
      <Header />
      <PopularMovies />
      {/* posters={getPosters(popularM)}  */}
      <PopularShows />
      <Family />
      <Documentary />
    </div>
  );
}
