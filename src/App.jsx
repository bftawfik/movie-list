import React from "react";

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
      tempNewMovie: {
        type: "userMovie",
        movieName: "",
        movieDate: null,
        movieOverview: "",
        moviePoster: null,
      },
    };
  }

  componentDidMount() {
    this.askForMore();
  }

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
    console.log(type);
    if (type === "moviePoster") {
      var selectedFile = e.target.files[0];
      var reader = new FileReader();

      reader.onload = (event) => {
        console.log(event.target.result);
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
      tempNewMovie: { type, movieName, movieDate, movieOverview, moviePoster },
    } = this.state;
    console.log(moviePoster || null);
    this.setState({
      userMovies: [
        ...userMovies,
        {
          type: type,
          title: movieName,
          release_date: movieDate,
          overview: movieOverview,
          poster_path: moviePoster,
        },
      ],
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
        />
      </React.Fragment>
    );
  }
}

export default App;
