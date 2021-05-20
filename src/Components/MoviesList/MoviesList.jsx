import React from "react";

import SectionHeader from "../SectionHeader/SectionHeader";
import ItemBox from "../ItemBox/ItemBox";

import * as styles from "./MoviesList.module.scss";

const MoviesList = ({ pageNo, totalPages, totalMovies, loadedMovies }) => {
  return (
    <div className={styles.MoviesList}>
      <SectionHeader title="title" />
      {loadedMovies.map((item) => (
        <ItemBox key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MoviesList;
