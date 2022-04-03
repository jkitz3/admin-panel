import { useState } from "react";
import cx from "classnames";
import styles from "./Checkbox.module.css";

export const Checkbox = ({
  children,
  className,
  value,
  onChange,
  isCheckboxChecked,
  ...props
}) => {
  const [checkboxOneChecked, setCheckboxOneChecked] = useState("checked");
  const [checkboxTwoChecked, setCheckboxTwoChecked] = useState("");

  const handleCheckboxOne = ({ target: { checked } }) => {
    setCheckboxOneChecked(checked);
  };

  const handleCheckboxTwo = ({ target: { checked } }) => {
    setCheckboxTwoChecked(checked);
  };

  return (
    <>
      <div className={cx(styles.checkbox, styles.blockCheckbox)}>
        <div className={styles.checkboxContent}>
          <input
            className={styles.checkboxInput}
            type="checkbox"
            checked={checkboxOneChecked}
            onChange={handleCheckboxOne}
            id="checkbox_1"
          />
          <label
            className={styles.checkboxContainer}
            htmlFor="checkbox_1"
          ></label>
        </div>
      </div>
      <div className={cx(styles.checkbox, styles.blockCheckbox)}>
        <div className={styles.checkboxContent}>
          <input
            className={styles.checkboxInput}
            type="checkbox"
            checked={checkboxTwoChecked}
            onChange={handleCheckboxTwo}
            id="checkbox_2"
          />
          <label
            className={styles.checkboxContainer}
            htmlFor="checkbox_2"
          ></label>
        </div>
      </div>
    </>
  );
};
