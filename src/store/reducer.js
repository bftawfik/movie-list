import uuid from "react-uuid";

import * as actionTypes from "./actions/actionTypes";

const initNewMovie = () => ({
  id: uuid(),
  type: "userMovie",
  title: "",
  release_date: "",
  overview: "",
  poster_path: null,
});

const newMovieProps = {
  movieName: "title",
  movieDate: "release_date",
  movieOverview: "overview",
  moviePoster: "poster_path",
};

const initState = {
  isLoading: false,
  serverMovies: {
    pageNo: 0,
    totalPages: null,
    totalMovies: 0,
    loadedMovies: [],
  },
  userMovies: [],
  likedMovies: [],
  tempNewMovie: initNewMovie(),
};

const rootReducer = (state = initState, action) => {
  if (action.type === actionTypes.CHANGE_IS_LOADING) {
    console.log(action);
    return { ...state, isLoading: action.payload };
  }

  if (action.type === actionTypes.ADD_LOADED_MOVIES) {
    console.log(action);
    return {
      ...state,
      isLoading: action.payload.isLoading,
      serverMovies: {
        pageNo: action.payload.pageNo,
        totalPages: action.payload.totalPages,
        totalMovies: action.payload.totalMovies,
        loadedMovies: state.serverMovies.loadedMovies.concat(
          action.payload.loadedMovies
        ),
      },
    };
  }

  if (action.type === actionTypes.ADD_NEW_LIKED_MOVIE) {
    console.log(action);
    return {
      ...state,
      likedMovies: [...state.likedMovies, action.payload],
    };
  }

  if (action.type === actionTypes.REMOVE_LIKED_MOVIE) {
    console.log(action);
    return {
      ...state,
      likedMovies: state.likedMovies.filter(
        (movie) => movie?.id !== action.payload?.id
      ),
    };
  }

  if (action.type === actionTypes.ADD_NEW_USER_MOVIE) {
    console.log(action);
    return {
      ...state,
      userMovies: [...state.userMovies, action.payload],
    };
  }

  if (action.type === actionTypes.REMOVE_USER_MOVIE) {
    console.log(action);
    return {
      ...state,
      userMovies: state.userMovies.filter(
        (movie) => movie?.id !== action.payload?.id
      ),
    };
  }

  if (action.type === actionTypes.CHANGE_TEMP_NEW_MOVIE_PROP) {
    console.log(action);
    return {
      ...state,
      tempNewMovie: { ...state.tempNewMovie, [newMovieProps[action.payload.propName]]: action.payload.value },
    };
  }

  if (action.type === actionTypes.RESET_TEMP_NEW_MOVIE) {
    console.log(action);
    return {
      ...state,
      tempNewMovie: initNewMovie(),
    };
  }

  return state;
};

export default rootReducer;
