import React from "react";

import FulscrnWrpr from "../FulscrnWrpr/FulscrnWrpr";

import * as styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <FulscrnWrpr
      className={styles.Footer}
      containerClassName={styles.container}
    >
      Footer
    </FulscrnWrpr>
  );
};

export default Footer;
