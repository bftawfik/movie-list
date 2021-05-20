import React from "react";

import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import MoviesList from "../../Components/MoviesList/MoviesList";

import { home as missingData } from "../../Mock";

import * as styles from "./Home.module.scss";

const Home = ({ pageNo, totalPages, totalMovies, loadedMovies }) => {
  return (
    <FulscrnWrpr className={styles.Home} containerClassName={styles.container}>
      <MoviesList
        {...missingData.allMovies}
        pageNo={pageNo}
        totalPages={totalPages}
        totalMovies={totalMovies}
        loadedMovies={loadedMovies}
      />
    </FulscrnWrpr>
  );
};

export default Home;
