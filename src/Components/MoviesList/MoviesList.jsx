import React from "react";

import ItemBox from "../../Components/ItemBox/ItemBox";

import * as styles from "./MoviesList.module.scss";

const MoviesList = ({ pageNo, totalPages, totalMovies, loadedMovies }) => {
  return (
    <div className={styles.MoviesList}>
      {loadedMovies.map((item) => (
        <ItemBox key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MoviesList;