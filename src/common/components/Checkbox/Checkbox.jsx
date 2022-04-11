import { useState } from "react";
import cx from "classnames";
import styles from "./Checkbox.module.css";

export const Checkbox = ({
  id,
  type="checkbox",
  onChange,
  labelValue,
  isCheckboxChecked = false,
  className,
  ...props
}) => {
  const [checkboxChecked, setCheckboxChecked] = useState(isCheckboxChecked);

  const handleCheckbox = ({ target: { checked } }) => {
    setCheckboxChecked(checked);
  };

  return (
    <div className={cx(styles.checkbox, styles.blockCheckbox)}>
      <div className={styles.checkboxContent}>
        <input
          id={id}
          type={type}
          checked={checkboxChecked}
          onChange={handleCheckbox}
          className={styles.checkboxInput}
        />
        <label className={styles.checkboxLabel} htmlFor={id}>
          {labelValue}
        </label>
      </div>
    </div>
  );
};
