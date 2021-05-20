import React from "react";
import { joinClassesWithSpace } from "../../../Helpers/helperFunctions";

import * as defaultStyles from "./BounceLoader.module.scss";

const BounceLoader = ({ topMsg, bottomMsg, overrideStyles, className }) => {
  const styles = overrideStyles || defaultStyles;

  return (
    <div className={joinClassesWithSpace(styles.BounceLoader, className)}>
      <div className={styles.topMsg}>{topMsg}</div>
      <div className={styles.shapeContainer}></div>
      <div className={styles.bottomMsg}>{bottomMsg}</div>
    </div>
  );
};
export default BounceLoader;
