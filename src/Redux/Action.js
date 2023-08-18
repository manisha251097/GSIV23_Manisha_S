import * as types from "./ActionType";
import axios from "axios";

//#region Get Movie list
const getMovieList = (data) => ({
    type: types.MY_MOVIE_LIST,
    payload: data,
  });
  
  export const loadMovieList = () => {
    return function (dispatch) {
      var headers = {
        "Content-type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTQ0NDI1YTc0YmY1MTc3MjRmM2EwYmM0ODA0OWU1YyIsInN1YiI6IjY0ZGUxNzI0Yjc3ZDRiMTEzZmM1ZDg2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.peBdLp8VG1uha04ePLavmPmwofpm3IrqmmRpnz72_6E`,
      };
  
      axios
        .get(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`, {
          headers,
        })
        .then((resp) => {
          dispatch(getMovieList(resp.data));
        })
        .catch((error) => console.log(error));
    };
  };
  //#endregion Get Movie list

  //#region Get Movie Details
const getMovieDetails = (data) => ({
    type: types.MY_MOVIE_DETAILS,
    payload: data,
  });
  
  export const loadMovieDetails = (id) => {
    return function (dispatch) {
      var headers = {
        "Content-type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTQ0NDI1YTc0YmY1MTc3MjRmM2EwYmM0ODA0OWU1YyIsInN1YiI6IjY0ZGUxNzI0Yjc3ZDRiMTEzZmM1ZDg2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.peBdLp8VG1uha04ePLavmPmwofpm3IrqmmRpnz72_6E`,
      };
  
      axios
        .get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
          headers,
        })
        .then((resp) => {
          dispatch(getMovieDetails(resp.data));
        })
        .catch((error) => console.log(error));
    };
  };
  //#endregion Get Movie Details


    //#region search Movies
const getSearchmovies = (data) => ({
    type: types.MY_MOVIE_SEARCH,
    payload: data,
  });
  
  export const loadSearchmovies = (searchdata) => {
    return function (dispatch) {
      var headers = {
        "Content-type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTQ0NDI1YTc0YmY1MTc3MjRmM2EwYmM0ODA0OWU1YyIsInN1YiI6IjY0ZGUxNzI0Yjc3ZDRiMTEzZmM1ZDg2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.peBdLp8VG1uha04ePLavmPmwofpm3IrqmmRpnz72_6E`,
      };
  
      axios
        .get(`https://api.themoviedb.org/3/search/movie`, {
          headers,
          params: {
            include_adult: false,
            language: 'en-US',
            page: 1,
            query: searchdata, 
          },
        })
        .then((resp) => {
          dispatch(getSearchmovies(resp.data));
        })
        .catch((error) => console.log(error));
    };
  };

  //#endregion search Movie 

