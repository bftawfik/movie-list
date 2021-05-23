import React from "react";
import uuid from "react-uuid";

import Home from "./Pages/Home/Home";

import Header from "./Components/Header/Header";

import Data from "./Services/Data";

import "./App.scss";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNo: 0,
      totalPages: null,
      totalMovies: 0,
      loadedMovies: [],
      loadingMore: false,
      userMovies: [],
      likedMovies: [],
      tempNewMovie: this.initNewMovie(),
    };
  }

  componentDidMount() {
    this.askForMore();
  }

  initNewMovie = () => ({
    id: uuid(),
    type: "userMovie",
    movieName: "",
    movieDate: "",
    movieOverview: "",
    moviePoster: null,
  });

  resetTempNewMovie = () => {
    this.setState({ tempNewMovie: this.initNewMovie() });
  };
  askForMore = () => {
    // console.log("askForMore");
    const { pageNo, loadingMore, totalPages } = this.state;
    if (!loadingMore && pageNo !== totalPages) {
      // console.log(loadingMore);
      this.setState({ loadingMore: true }, this.loadMore);
    }
  };

  loadMore = async () => {
    // console.log("loadMore");
    const { pageNo, loadedMovies } = this.state;
    const moviesData = await Data.loadMovies(pageNo + 1);
    const { page, total_pages, total_results, results } = moviesData;
    this.setState({
      pageNo: page,
      totalPages: total_pages,
      totalMovies: total_results,
      loadedMovies: loadedMovies.concat(results),
      loadingMore: false,
    });
  };

  likeNewMovie = (newMovie) => {
    // console.log("likeNewMovie");
    const { likedMovies } = this.state;
    const found =
      likedMovies.find((movie) => movie?.id === newMovie?.id) != null;
    if (!found) {
      this.setState({ likedMovies: [...likedMovies, newMovie] });
    } else {
      this.setState({
        likedMovies: likedMovies.filter((movie) => movie?.id !== newMovie?.id),
      });
    }
  };

  onInput = (type, e) => {
    const { tempNewMovie } = this.state;
    if (type === "moviePoster") {
      var selectedFile = e.target.files[0];
      var reader = new FileReader();
      reader.onload = (event) => {
        this.setState({
          tempNewMovie: { ...tempNewMovie, [type]: event.target.result },
        });
      };

      reader.readAsDataURL(selectedFile);
    } else {
      if (tempNewMovie[type] !== e.target.value) {
        this.setState({
          tempNewMovie: {
            ...tempNewMovie,
            [type]: e.target.value,
          },
        });
      }
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      userMovies,
      tempNewMovie: {
        id,
        type,
        movieName,
        movieDate,
        movieOverview,
        moviePoster,
      },
    } = this.state;
    this.setState({
      userMovies: [
        ...userMovies,
        {
          id: id,
          type: type,
          title: movieName,
          release_date: movieDate,
          overview: movieOverview,
          poster_path: moviePoster,
        },
      ],
    });
    this.resetTempNewMovie();
  };

  removeUserMovie = (newMovie) => {
    const { userMovies } = this.state;
    this.setState({
      userMovies: userMovies.filter((movie) => movie?.id !== newMovie?.id),
    });
  };

  render() {
    const {
      pageNo,
      totalPages,
      totalMovies,
      loadedMovies,
      loadingMore,
      userMovies,
      likedMovies,
      tempNewMovie,
    } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Home
          totalMovies={totalMovies}
          loadedMovies={loadedMovies}
          loadingMore={loadingMore}
          rechedEnd={pageNo === totalPages}
          askForMore={this.askForMore}
          allLikedMovies={userMovies.concat(likedMovies)}
          likeNewMovie={this.likeNewMovie}
          tempNewMovie={tempNewMovie}
          onInputHandler={this.onInput}
          onSubmitHandler={this.onSubmit}
          resetTempNewMovie={this.resetTempNewMovie}
          removeUserMovie={this.removeUserMovie}
        />
      </React.Fragment>
    );
  }
}

export default App;
