import * as actionTypes from "./actionTypes";

export const switchLoadMore = (value) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  payload: value,
});

export const addLoadedMovies = (value) => ({
  type: actionTypes.ADD_LOADED_MOVIES,
  payload: value,
});

export const addNewLikedMovie = (value) => ({
  type: actionTypes.ADD_NEW_LIKED_MOVIE,
  payload: value,
});

export const removeLikedMovie = (value) => ({
  type: actionTypes.REMOVE_LIKED_MOVIE,
  payload: value,
});

export const addNewUserMovie = (value) => ({
  type: actionTypes.ADD_NEW_USER_MOVIE,
  payload: value,
});

export const removeUserMovie = (value) => ({
  type: actionTypes.REMOVE_USER_MOVIE,
  payload: value,
});

export const changeTempNewMovieProp = (value) => ({
  type: actionTypes.CHANGE_TEMP_NEW_MOVIE_PROP,
  payload: value,
});

export const resetTempNewMovie = (value) => ({
  type: actionTypes.RESET_TEMP_NEW_MOVIE,
  payload: value,
});

export const updateAllUserMovies = (value) => ({
  type: actionTypes.UPDATE_ALL_USER_MOVIES,
  payload: value,
});
