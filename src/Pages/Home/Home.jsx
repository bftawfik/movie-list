import React from "react";

import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import MoviesList from "../../Components/MoviesList/MoviesList";

import { home as missingData } from "../../Mock";

import * as styles from "./Home.module.scss";

const Home = ({
  pageNo,
  totalPages,
  totalMovies,
  loadedMovies,
  loadingMore,
  askForMore,
}) => {
  return (
    <FulscrnWrpr className={styles.Home} containerClassName={styles.container}>
      <MoviesList
        {...missingData.allMovies}
        pageNo={pageNo}
        totalPages={totalPages}
        totalMovies={totalMovies}
        loadedMovies={loadedMovies}
        loadingMore={loadingMore}
        askForMore={askForMore}
      />
    </FulscrnWrpr>
  );
};

export default Home;
