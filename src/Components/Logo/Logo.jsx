import React from "react";

import {TheMoviesList} from "../AllSvgs";
import { joinClassesWithSpace } from "../../Helpers/helperFunctions";

import * as styles from "./Logo.module.scss";

const Logo = ({className}) => {
  return (
    <div className={joinClassesWithSpace(styles.Logo, className)}>
      <TheMoviesList />
    </div>
  );
};

export default Logo;
