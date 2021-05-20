import React from "react";

import Home from "./Pages/Home/Home";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Data from "./Services/Data";

import "./App.scss";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pageNo: 0, totalPages: 0, totalMovies: 0, loadedMovies: [] };
  }

  async componentDidMount() {
    const moviesData = await Data.loadMovies(2);
    // console.log(moviesData);

    const { page, total_pages, total_results, results } = moviesData;
    // console.log(page, total_pages, total_results, results);
    this.setState({
      pageNo: page,
      totalPages: total_pages,
      totalMovies: total_results,
      loadedMovies: results,
    });
  }

  render() {
    const { pageNo, totalPages, totalMovies, loadedMovies } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Home
          pageNo={pageNo}
          totalPages={totalPages}
          totalMovies={totalMovies}
          loadedMovies={loadedMovies}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
