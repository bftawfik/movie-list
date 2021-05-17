import React from "react";

import FulscrnWrpr from "../FulscrnWrpr/FulscrnWrpr";

import * as styles from "./Header.module.scss";

const Header = () => {
  return (
    <FulscrnWrpr
      className={styles.Header}
      containerClassName={styles.container}
    >
      Header
    </FulscrnWrpr>
  );
};

export default Header;
