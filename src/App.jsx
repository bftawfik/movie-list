import React from "react";

import Home from "./Pages/Home/Home";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

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
    };
  }

  componentDidMount() {
    this.askForMore();
  }

  askForMore = () => {
    console.log("askForMore");
    const { pageNo, loadingMore, totalPages, loadedMovies } = this.state;
    if (!loadingMore && pageNo !== totalPages) {
      console.log(loadingMore);
      this.setState({ loadingMore: true }, this.loadMore);
    }
  };

  loadMore = async () => {
    console.log("loadMore");
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

  render() {
    const {
      pageNo,
      totalPages,
      totalMovies,
      loadedMovies,
      loadingMore,
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
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
