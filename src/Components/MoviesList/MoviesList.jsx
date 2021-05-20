import React from "react";
import { InView } from "react-intersection-observer";

import SectionHeader from "../SectionHeader/SectionHeader";
import ItemBox from "../ItemBox/ItemBox";
import BounceLoader from "../Spinners/BounceLoader/BounceLoader";

import * as styles from "./MoviesList.module.scss";

const MoviesList = ({
  title,
  loadedMovies,
  loadingMore,
  rechedEnd,
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
            }
          }}
        >
          {({ inView, ref }) => {
            return loadingMore ? (
              <BounceLoader
                topMsg="Loading..."
                bottomMsg="Please Waiat."
                ref={ref}
              />
            ) : rechedEnd ? (
              <p className={styles.theEnd} ref={ref}>
                The End
              </p>
            ) : (
              <button
                ref={ref}
                className={styles.askForMore}
                onClick={askForMore}
              >
                Show more
              </button>
            );
          }}
        </InView>
      </div>
    </div>
  );
};

export default MoviesList;
