import React from "react";

import FulscrnWrpr from "../FulscrnWrpr/FulscrnWrpr";
import Logo from "../Logo/Logo";

import * as styles from "./Header.module.scss";

const Header = () => {
  return (
    <FulscrnWrpr
      className={styles.Header}
      containerClassName={styles.container}
    >
      <div className={styles.headerRow}>
        <Logo className={styles.logo} />
      </div>
    </FulscrnWrpr>
  );
};

export default Header;
