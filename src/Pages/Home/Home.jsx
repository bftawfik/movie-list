import React from "react";

import FulscrnWrpr from "../../Components/FulscrnWrpr/FulscrnWrpr";

import * as styles from "./Home.module.scss";

const Home = () => {
  return (
    <FulscrnWrpr className={styles.Home} containerClassName={styles.container}>
      Home
    </FulscrnWrpr>
  );
};

export default Home;
