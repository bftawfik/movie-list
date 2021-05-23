import React from "react";

import SectionHeader from "../SectionHeader/SectionHeader";
import FormRow from "./FormRow/FormRow";

import { joinClassesWithSpace } from "../../Helpers/helperFunctions";

import * as styles from "./AddItemData.module.scss";

const AddItemData = ({ title, form: { rows }, tempNewMovie, onInputHandler, onSubmitHandler }) => {

  return (
    <div className={styles.AddItemData}>
      <SectionHeader title={title} />
      <form className={styles.addItemForm} onSubmit={onSubmitHandler}>
        {rows.map((row, ndx) => {
          const { type } = row;
          return (
            <FormRow
              key={ndx}
              row={row}
              styles={styles}
              value={tempNewMovie[type]}
              inputFunction={(e) => onInputHandler(type, e)}
            />
          );
        })}
        <div className={joinClassesWithSpace(styles.formRow, styles.fullWidth)}>
          <button type="submit">Add Movie</button>
          <button type="reset">Cencel</button>
        </div>
      </form>
    </div>
  );
};
export default AddItemData;
