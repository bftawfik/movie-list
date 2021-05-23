import React from "react";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import MoviesList from "../../Components/MoviesList/MoviesList";
import AddItemBox from "../../Components/AddItemBox/AddItemBox";
import AddItemData from "../../Components/AddItemData/AddItemData";

import { home as missingData } from "../../Mock";

import * as styles from "./Home.module.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    };
  }

  toggleModal = () => {
    const { modalOpen } = this.state;
    this.setState({ modalOpen: !modalOpen });
  };

  render() {
    const { modalOpen } = this.state;
    const {
      totalMovies,
      loadedMovies,
      loadingMore,
      askForMore,
      rechedEnd,
      allLikedMovies,
      likeNewMovie,
      tempNewMovie,
      onInputHandler,
      onSubmitHandler,
      resetTempNewMovie,
      removeUserMovie,
    } = this.props;
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
            loadingMore={false}
            rechedEnd={rechedEnd}
            likeNewMovie={likeNewMovie}
            matchList={allLikedMovies}
            removeUserMovie={removeUserMovie}
          >
            <AddItemBox onClickHandler={this.toggleModal} />
          </MoviesList>
          <MoviesList
            {...missingData.allMovies}
            totalMovies={totalMovies}
            loadedMovies={loadedMovies}
            loadingMore={loadingMore}
            rechedEnd={rechedEnd}
            askForMore={askForMore}
            likeNewMovie={likeNewMovie}
            matchList={allLikedMovies}
          />
        </FulscrnWrpr>
        <Modal open={modalOpen} onClose={this.toggleModal} center>
          <AddItemData
            {...missingData.addItemData}
            tempNewMovie={tempNewMovie}
            onInputHandler={onInputHandler}
            onSubmitHandler={(e) => {
              this.toggleModal();
              onSubmitHandler(e);
            }}
            resetTempNewMovie={resetTempNewMovie}
          />
        </Modal>
      </React.Fragment>
    );
  }
}

export default Home;
