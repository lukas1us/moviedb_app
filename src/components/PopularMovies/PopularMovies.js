import React from "react";

const PopularMovies = ({ posters }) => {
  return (
    <div className="section">
      <h3> Popular movies </h3>

      {/* {posters.map((poster) => (
        <img alt={poster} src={poster.value}></img>
      ))} */}
    </div>
  );
};

export default PopularMovies;
