import React from "react";

import SectionHeader from "../SectionHeader/SectionHeader";
import ItemBox from "../ItemBox/ItemBox";

import * as styles from "./MoviesList.module.scss";

const MoviesList = ({ title, pageNo, totalPages, totalMovies, loadedMovies }) => {
  return (
    <div className={styles.MoviesList}>
      <SectionHeader title={title} />
      <div className={styles.moviesContainer}>
        {loadedMovies.map((item) => (
          <ItemBox key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
