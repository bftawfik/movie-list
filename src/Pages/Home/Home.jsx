import React, { useState } from "react";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import MoviesList from "../../Components/MoviesList/MoviesList";
import AddItemBox from "../../Components/AddItemBox/AddItemBox";
import AddItemData from "../../Components/AddItemData/AddItemData";

import { home as missingData } from "../../Mock";

import * as styles from "./Home.module.scss";

const Home = ({
  totalMovies,
  loadedMovies,
  isLoading,
  askForMore,
  rechedEnd,
  allLikedMovies,
  likeNewMovie,
  tempNewMovie,
  onInputHandler,
  onSubmitHandler,
  resetTempNewMovie,
  removeUserMovie,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <React.Fragment>
      <FulscrnWrpr
        className={styles.Home}
        containerClassName={styles.container}
      >
        <MoviesList
          {...missingData.allLikedMovies}
          totalMovies={allLikedMovies.length}
          loadedMovies={allLikedMovies}
          isLoading={false}
          rechedEnd={rechedEnd}
          likeNewMovie={likeNewMovie}
          matchList={allLikedMovies}
          removeUserMovie={removeUserMovie}
        >
          <AddItemBox onClickHandler={() => setModalOpen(true)} />
        </MoviesList>
        <MoviesList
          {...missingData.allMovies}
          totalMovies={totalMovies}
          loadedMovies={loadedMovies}
          isLoading={isLoading}
          rechedEnd={rechedEnd}
          askForMore={askForMore}
          likeNewMovie={likeNewMovie}
          matchList={allLikedMovies}
        />
      </FulscrnWrpr>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} center>
        <AddItemData
          {...missingData.addItemData}
          tempNewMovie={tempNewMovie}
          onInputHandler={onInputHandler}
          onSubmitHandler={(e) => {
            setModalOpen(false);
            onSubmitHandler(e);
          }}
          resetTempNewMovie={resetTempNewMovie}
        />
      </Modal>
    </React.Fragment>
  );
};

export default Home;
