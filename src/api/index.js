import axios from "axios";

const url = "https://api.themoviedb.org/3";
const api_key = "?api_key=7fa80c02919ec99dbdcded27866e19c3";
const popularMovies = `${url}/movie/now_playing${api_key}`;
const popularTv = `${url}/tv/popular${api_key}`;
const family = `${url}/discover/movie${api_key}&with_genres=10751`;
const documentary = `${url}/discover/movie${api_key}`;
const movieDetail = `${url}/movie/`;
const searchQuery = `${url}/search/movie${api_key}`;

//fetching popular movies
export const moviesPopular = async () => {
  try {
    const {
      data
    } = await axios.get(popularMovies, {
      params: {
        language: "en_US",
        page: 1,
      },
    });
    const posterUrl = "https://image.tmdb.org/t/p/original";
    const modifiedData = data["results"].map((result) => ({
      backdrop_path: posterUrl + result.backdrop_path,
      id: result.id,
      title: result.original_title,
      genre_ids: result.genre_ids,
      overview: result.overview,
      poster: posterUrl + result.poster_path,
      vote_average: result.vote_average,
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
//fetching popular TV shows
export const showsPopular = async () => {
  try {
    const {
      data
    } = await axios.get(popularTv, {
      params: {
        language: "en_US",
        page: 1,
      },
    });

    const posterUrl = "https://image.tmdb.org/t/p/original";
    const modifiedData = data["results"].map((result) => ({
      backdrop_path: posterUrl + result.backdrop_path,
      id: result.id,
      title: result.name,
      genre_ids: result.genre_ids,
      overview: result.overview,
      poster: posterUrl + result.poster_path,
      rating: result.vote_average,
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
// //fetching family friendly movies
export const familyData = async () => {
  try {
    const {
      data
    } = await axios.get(family, {
      params: {
        language: "en_US",
        page: 1,
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

    return modifiedData;

  } catch (error) {
    console.log(error);
  }
};
//fetching documentary movies
export const documentaryData = async () => {
  try {
    const {
      data
    } = await axios.get(documentary, {
      params: {
        language: "en_US",
        page: 1,
        with_genres: 99,
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

    return modifiedData;

  } catch (error) {
    console.log(error);
  }
};
// fetching data for MovieDetail component
export const detailMovie = async (id) => {
  try {
    const {
      data
    } = await axios.get(`${movieDetail}${id}${api_key}`, {
      params: {
        language: "en_US"
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
}
// fetching data for Search component
export const querySearch = async (query) => {
  try {
    const {
      data
    } = await axios.get(searchQuery, {
      params: {
        language: "en_US",
        query: query
      },
    });

    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
}