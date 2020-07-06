import React, { useState, useEffect } from "react";
import { detailMovie } from "../../api";
import { MediaModal } from "../";
import { Button, ButtonToolbar } from "react-bootstrap";

const MovieDetail = ({ match }) => {
  let params = match.params;
  const posterUrl = "https://image.tmdb.org/t/p/original";
  const [detail, setDetail] = useState([]);
  //handling modal feature
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //fetching API
  useEffect(() => {
    const fetchAPI = async () => {
      setDetail(await detailMovie(params.id));
    };
    fetchAPI();
  }, [params.id]);

  return (
    <div
      className="movie-detail-container"
      style={{
        background: `url(${posterUrl}${detail.backdrop_path}) no-repeat center`,
      }}
    >
      <div
        className="movie-detail"
        style={{ backgroundColor: "rgb(42, 41, 41)" }}
      >
        <div className="movie-desc">
          <div className="movie-title">
            <h1>{detail.original_title}</h1>
            <h4>{detail.tagline}</h4>
          </div>
          <p>{detail.overview}</p>
          <div className="metadata-container">
            <div className="metadata">
              <p>Runtime</p>
              <p>{detail.runtime}</p>
            </div>
            <div className="metadata">
              <p>Release</p>
              <p>{detail.release_date}</p>
            </div>
            <div className="metadata">
              <p>Ranking</p>
              <p>{detail.vote_average}</p>
            </div>
            <div className="metadata">
              <p>Language</p>
              <p>{detail.original_language}</p>
            </div>
          </div>
          <ButtonToolbar>
            <Button variant="secondary" onClick={handleShow}>
              Play movie
            </Button>

            <MediaModal
              show={show}
              onHide={handleClose}
              title={detail.original_title}
            />
          </ButtonToolbar>
        </div>

        <div className="movie-desc">
          <img
            className="no-poster"
            src={`${posterUrl}${detail.poster_path}`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
