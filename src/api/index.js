import axios from "axios";

// const api =
//     "https://api.themoviedb.org/3/movie/550?api_key=7fa80c02919ec99dbdcded27866e19c3";
const documentary =
    "https://api.themoviedb.org/3/discover/movie?api_key=7fa80c02919ec99dbdcded27866e19c3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=99&with_original_language=en";
const family =
    "https://api.themoviedb.org/3/discover/movie?api_key=7fa80c02919ec99dbdcded27866e19c3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=10751&with_original_language=en";
const popularMovies = "https://api.themoviedb.org/3/movie/popular?api_key=7fa80c02919ec99dbdcded27866e19c3&language=en-US&page=1";
const popularTv = "https://api.themoviedb.org/3/tv/popular?api_key=7fa80c02919ec99dbdcded27866e19c3&language=en-US&page=1";

//fetching API
// export const fetchData = async () => {
//     try {
//         const {
//             data
//         } = await axios.get(api);
//         console.log(data)
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// };
//fetching popular movies
export const moviesPopular = async () => {
    try {
        const {
            data: {
                results
            }
        } = await axios.get(popularMovies);

        return results;
    } catch (error) {
        console.log(error);
    }
};
//fetching popular TV shows
export const showsPopular = async () => {
    try {
        const {
            data: {
                results
            }
        } = await axios.get(popularTv);

        return results;
    } catch (error) {
        console.log(error);
    }
};
//fetching family friendly movies
export const familyData = async () => {
    try {
        const {
            data: {
                results
            }
        } = await axios.get(family);

        return results;
    } catch (error) {
        console.log(error);
    }
};
//fetching documentary movies
export const documentaryData = async () => {
    try {
        const {
            data: {
                results
            }
        } = await axios.get(documentary);

        return results;
    } catch (error) {
        console.log(error);
    }
};
//getting posters for first wireframe
export function getPosters(obj) {
    const posters = Object.keys(obj).map(poster => ({
        poster: "https://image.tmdb.org/t/p/w500" + poster.poster_path,
    }));
    console.log(posters);
    return posters;
}