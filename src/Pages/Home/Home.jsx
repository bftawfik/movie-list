import React from "react";

import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";
import ItemBox from "../../Components/ItemBox/ItemBox";

import * as styles from "./Home.module.scss";

const Home = ({ loadedMovies }) => {
  return (
    <FulscrnWrpr className={styles.Home} containerClassName={styles.container}>
      <div className={styles.itemsContainer}>
        {loadedMovies.map((item) => (
          <ItemBox key={item.id} item={item} />
        ))}
      </div>
    </FulscrnWrpr>
  );
};

export default Home;
