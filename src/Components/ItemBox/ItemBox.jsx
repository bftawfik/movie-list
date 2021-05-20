import React from "react";
import LinesEllipsis from "react-lines-ellipsis";

import Data from "../../Services/Data";

import * as styles from "./ItemBox.module.scss";

const ItemBox = ({ item: { title, poster_path, release_date, overview } }) => {
  return (
    <div className={styles.ItemBox}>
      <p className={styles.date}>
        {/* <span>Realease Date:</span> */}
        <span>{Data.getProperDate(release_date)}</span>
      </p>
      <div className={styles.imageContainer}>
        <img src={Data.getProperImageUrl(poster_path)} />
      </div>
      <LinesEllipsis
        component="h3"
        ellipsis="..."
        maxLine="2"
        basedOn={"words"}
        text={title || ""}
        className={styles.title}
      />

      <LinesEllipsis
        component="p"
        ellipsis="..."
        maxLine="3"
        basedOn={"words"}
        text={overview || ""}
        className={styles.overview}
      />
    </div>
  );
};

export default ItemBox;
