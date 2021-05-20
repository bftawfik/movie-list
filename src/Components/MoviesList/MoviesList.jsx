import React from "react";
import { InView } from "react-intersection-observer";

import SectionHeader from "../SectionHeader/SectionHeader";
import ItemBox from "../ItemBox/ItemBox";

import * as styles from "./MoviesList.module.scss";

const MoviesList = ({
  title,
  pageNo,
  totalPages,
  totalMovies,
  loadedMovies,
  loadingMore,
  askForMore,
}) => {
  return (
    <div className={styles.MoviesList}>
      <SectionHeader title={title} />
      <div className={styles.moviesContainer}>
        {loadedMovies.map((item) => (
          <ItemBox key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.sectionFooter}>
        <InView
          threshold={1}
          onChange={(inView, entry) => {
            if (inView && !loadingMore) {
              askForMore();
              console.log("inView = ", inView);
            }
          }}
        >
          {({ inView, ref }) => {
            return <button ref={ref}>Show more</button>;
          }}
        </InView>
      </div>
    </div>
  );
};

export default MoviesList;
