import React from "react";

import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import MoviesList from "../../Components/MoviesList/MoviesList";

import { home as missingData } from "../../Mock";

import * as styles from "./Home.module.scss";

const Home = ({
  totalMovies,
  loadedMovies,
  loadingMore,
  askForMore,
  rechedEnd,
  myMovies,
  likeNewMovie,
}) => {
  return (
    <FulscrnWrpr className={styles.Home} containerClassName={styles.container}>
      <MoviesList
        {...missingData.myMovies}
        totalMovies={myMovies.length}
        loadedMovies={myMovies}
        loadingMore={false}
        rechedEnd={rechedEnd}
        likeNewMovie={likeNewMovie}
        matchList={myMovies}
      />
      <MoviesList
        {...missingData.allMovies}
        totalMovies={totalMovies}
        loadedMovies={loadedMovies}
        loadingMore={loadingMore}
        rechedEnd={rechedEnd}
        askForMore={askForMore}
        likeNewMovie={likeNewMovie}
        matchList={myMovies}
      />
    </FulscrnWrpr>
  );
};

export default Home;
