import React from "react";

import { joinClassesWithSpace } from "../../Helpers/helperFunctions";

import * as styles from "./SectionHeader.module.scss";

const SectionHeader = ({ title, className }) => {
  return (
    <div className={joinClassesWithSpace(styles.SectionHeader, className)}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default SectionHeader;
