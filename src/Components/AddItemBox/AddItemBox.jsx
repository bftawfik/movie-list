import React from "react";

import { joinClassesWithSpace } from "../../Helpers/helperFunctions";

import * as styles from "./AddItemBox.module.scss";

const AddItemBox = (props) => {
  return (
    <button className={joinClassesWithSpace(styles.AddItemBox)}>
      <div className={styles.dateContainer}></div>
      <div className={styles.imageContainer}>
        <div className={styles.imagePlaceHolder} />
      </div>
      <h3 className={styles.title}>Add a new movie</h3>
      <p className={styles.overview}/>
    </button>
  );
};

export default AddItemBox;
