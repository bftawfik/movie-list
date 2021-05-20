import React from "react";

import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import MoviesList from "../../Components/MoviesList/MoviesList";

import * as styles from "./Home.module.scss";

const Home = ({ pageNo, totalPages, totalMovies, loadedMovies }) => {
  return (
    <FulscrnWrpr className={styles.Home} containerClassName={styles.container}>
      <MoviesList
        pageNo={pageNo}
        totalPages={totalPages}
        totalMovies={totalMovies}
        loadedMovies={loadedMovies}
      />
    </FulscrnWrpr>
  );
};

export default Home;
