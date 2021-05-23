import React from "react";

import { joinClassesWithSpace } from "../../../Helpers/helperFunctions";

const FormRow = ({ styles, row: { type, label }, value, inputFunction }) => {
  let rowInput;
  const rowInputProps = {
    id: type,
    name: type,
    className: styles.formInput,
    value: value,
    onInput: inputFunction,
    required: true,
  };
  switch (type) {
    case "movieName": {
      rowInput = <input type="text" {...rowInputProps} />;
      break;
    }
    case "movieDate": {
      rowInput = (
        <input
          type="date"
          {...rowInputProps}
        />
      );
      break;
    }
    case "movieOverview": {
      rowInput = <textarea {...rowInputProps} />;
      break;
    }
    case "moviePoster": {
      rowInput = (
        <input type="file" accept=".jpg,.jpeg,.png,.gif" {...rowInputProps} />
      );
      break;
    }
    default:
      rowInput = null;
  }
  return (
    type && (
      <div className={styles.formRow}>
        <label
          htmlFor={type}
          className={joinClassesWithSpace(styles.formLabel, styles.required)}
        >
          {label}
        </label>
        {rowInput}
      </div>
    )
  );
};
export default FormRow;
