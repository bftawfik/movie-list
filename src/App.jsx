import React from "react";
import { connect } from "react-redux";

import Home from "./Pages/Home/Home";

import Header from "./Components/Header/Header";

import Data from "./Services/Data";
import * as actionCreators from "./store/actions/actions";

import "./App.scss";
class App extends React.Component {
  componentDidMount() {
    this.askForMore();
  }

  askForMore = () => {
    console.log("askForMore");
    const {
      switchLoadMore,
      isLoading,
      serverMovies: { pageNo, totalPages },
    } = this.props;
    if (!isLoading && pageNo !== totalPages) {
      switchLoadMore(true);
      this.loadMore();
    }
  };

  loadMore = async () => {
    // console.log("loadMore");
    const {
      serverMovies: { pageNo },
      addLoadedMovies,
    } = this.props;
    const moviesData = await Data.loadMovies(pageNo + 1);
    const { page, total_pages, total_results, results } = moviesData;
    addLoadedMovies({
      pageNo: page,
      totalPages: total_pages,
      totalMovies: total_results,
      loadedMovies: results,
      isLoading: false,
    });
  };

  likeNewMovie = (newMovie) => {
    // console.log("likeNewMovie");
    const { likedMovies, addNewLikedMovie, removeLikedMovie } = this.props;
    const found =
      likedMovies.find((movie) => movie?.id === newMovie?.id) != null;
    if (!found) {
      addNewLikedMovie(newMovie);
    } else {
      removeLikedMovie(newMovie);
    }
  };

  onInput = (type, e) => {
    const { tempNewMovie, changeTempNewMovieProp } = this.props;
    if (type === "moviePoster") {
      var selectedFile = e.target.files[0];
      var reader = new FileReader();
      reader.onload = (event) => {
        changeTempNewMovieProp({ propName: type, value: event.target.result });
      };

      reader.readAsDataURL(selectedFile);
    } else {
      if (tempNewMovie[type] !== e.target.value) {
        changeTempNewMovieProp({ propName: type, value: e.target.value });
      }
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { tempNewMovie, addNewUserMovie, resetTempNewMovie } = this.props;
    addNewUserMovie(tempNewMovie);
    resetTempNewMovie();
  };

  render() {
    const {
      isLoading,
      serverMovies,
      likedMovies,
      userMovies,
      tempNewMovie,
      removeUserMovie,
    } = this.props;
    return (
      <React.Fragment>
        <Header />
        <Home
          totalMovies={serverMovies.totalMovies}
          loadedMovies={serverMovies.loadedMovies}
          isLoading={isLoading}
          rechedEnd={serverMovies.pageNo === serverMovies.totalPages}
          askForMore={this.askForMore}
          allLikedMovies={userMovies.concat(likedMovies)}
          likeNewMovie={this.likeNewMovie}
          tempNewMovie={tempNewMovie}
          onInputHandler={this.onInput}
          onSubmitHandler={this.onSubmit}
          resetTempNewMovie={this.resetTempNewMovie}
          removeUserMovie={removeUserMovie}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    serverMovies: state.serverMovies,
    likedMovies: state.likedMovies,
    userMovies: state.userMovies,
    tempNewMovie: state.tempNewMovie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchLoadMore: (value) => {
      dispatch(actionCreators.switchLoadMore(value));
    },
    addLoadedMovies: (value) => {
      dispatch(actionCreators.addLoadedMovies(value));
    },
    addNewLikedMovie: (value) => {
      dispatch(actionCreators.addNewLikedMovie(value));
    },
    removeLikedMovie: (value) => {
      dispatch(actionCreators.removeLikedMovie(value));
    },
    addNewUserMovie: (value) => {
      dispatch(actionCreators.addNewUserMovie(value));
    },
    removeUserMovie: (value) => {
      dispatch(actionCreators.removeUserMovie(value));
    },
    changeTempNewMovieProp: (value) => {
      dispatch(actionCreators.changeTempNewMovieProp(value));
    },
    resetTempNewMovie: () => {
      dispatch(actionCreators.resetTempNewMovie());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
