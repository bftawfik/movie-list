import React from "react";

import Data from "../../Services/Data";

import * as styles from "./ItemBox.module.scss";

const ItemBox = ({ item: { title, poster_path } }) => {
  return (
    <div className={styles.ItemBox}>
      <div className={styles.imageContainer}>
        <img src={Data.getProperImageUrl(poster_path)} />
      </div>
      <h3>{title}</h3>
      <p>date</p>
      <p>overview</p>
    </div>
  );
};

export default ItemBox;
