import React from "react";

import {TheMoviesList} from "../AllSvgs";

import * as styles from "./Logo.module.scss";

const Logo = (props) => {
  return (
    <div className={styles.Logo}>
      <TheMoviesList />
    </div>
  );
};

export default Logo;
