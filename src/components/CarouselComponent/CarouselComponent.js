import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";

import {
  moviesPopular,
  showsPopular,
  familyData,
  documentaryData,
} from "../../api/index";

const CarouselComponent = () => {
  //state
  const [popularM, setPopularM] = useState([]);
  const [popularS, setPopularS] = useState([]);
  const [family, setFamily] = useState([]);
  const [documentary, setDocumentary] = useState([]);

  useEffect(() => {
    //fetched popular movies
    const fetchAPI = async () => {
      setPopularM(await moviesPopular());
      setPopularS(await showsPopular());
      setFamily(await familyData());
      setDocumentary(await documentaryData());
    };

    fetchAPI();
  }, []);
  function inputPosters(data) {
    const movies = data.map((item, index) => {
      return (
        <div key={index}>
          <Link to={`/movie/${item.id}`}>
            <img className="no-poster" src={item.poster} alt="" />
          </Link>
        </div>
      );
    });
    return movies;
  }

  return (
    <div className="section">
      <div className="carousel">
        <h3> Popular movies </h3>
        <Carousel itemsToShow={3}>{inputPosters(popularM)}</Carousel>
      </div>
      <div className="carousel">
        <h3> Popular shows </h3>
        <Carousel itemsToShow={3}>{inputPosters(popularS)}</Carousel>
      </div>
      <div className="carousel">
        <h3> Family </h3>
        <Carousel itemsToShow={3}>{inputPosters(family)}</Carousel>
      </div>
      <div className="carousel">
        <h3> Documentary </h3>
        <Carousel itemsToShow={3}>{inputPosters(documentary)}</Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
