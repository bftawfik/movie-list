import React from "react";
import { InView } from "react-intersection-observer";

import SectionHeader from "../SectionHeader/SectionHeader";
import ItemBox from "../ItemBox/ItemBox";
import AddItemBox from "../AddItemBox/AddItemBox";
import BounceLoader from "../Spinners/BounceLoader/BounceLoader";

import { joinClassesWithSpace } from "../../Helpers/helperFunctions";

import * as styles from "./MoviesList.module.scss";

const MoviesList = ({
  title,
  emptyListMsg,
  totalMovies,
  loadedMovies,
  loadingMore,
  rechedEnd,
  askForMore,
  likeNewMovie,
  matchList = [],
  children,
}) => {
  const matchedLoadedMovies = loadedMovies.map((movie) =>
    matchList.find((matchMovie) => matchMovie?.id === movie?.id) != null
      ? { ...movie, seleceted: true }
      : movie
  );
  return (
    <div
      className={joinClassesWithSpace(
        styles.MoviesList,
        askForMore && styles.dynamicList
      )}
    >
      <SectionHeader title={title}>
        <p className={styles.totalMovies}>{`${totalMovies} Movies`}</p>
      </SectionHeader>
      {totalMovies === 0 && (
        <div className={styles.emptyListMsg}>{emptyListMsg}</div>
      )}
      <div className={styles.moviesContainer}>
        {children}
        {matchedLoadedMovies.map((item) => (
          <ItemBox key={item.id} item={item} likeNewMovie={likeNewMovie} />
        ))}
      </div>
      {askForMore && (
        <div className={styles.sectionFooter}>
          <InView
            threshold={1}
            onChange={(inView, entry) => {
              if (inView && !loadingMore && askForMore) {
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
                  onClick={askForMore && askForMore}
                >
                  Show more
                </button>
              );
            }}
          </InView>
        </div>
      )}
    </div>
  );
};

export default MoviesList;
