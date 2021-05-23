import React from "react";
import LinesEllipsis from "react-lines-ellipsis";

import { Heart } from "../AllSvgs";
import { joinClassesWithSpace } from "../../Helpers/helperFunctions";

import Data from "../../Services/Data";

import * as styles from "./ItemBox.module.scss";
class ItemBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  render() {
    const { error } = this.state;
    const { item, likeNewMovie } = this.props;
    const {
      title,
      poster_path,
      release_date,
      overview,
      seleceted,
      type,
    } = item;
    return (
      <div
        className={joinClassesWithSpace(
          styles.ItemBox,
          seleceted && styles.seleceted
        )}
      >
        <div className={styles.dateContainer}>
          <button onClick={() => likeNewMovie(item)}>
            <Heart />
          </button>
          <p>{Data.getProperDate(release_date)}</p>
        </div>
        <div className={styles.imageContainer}>
          <img
            onError={() => {
              this.setState({ error: true });
            }}
            src={
              error
                ? Data.getFallbackImage()
                : Data.getProperImageUrl(poster_path, type)
            }
          />
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
  }
}

export default ItemBox;
