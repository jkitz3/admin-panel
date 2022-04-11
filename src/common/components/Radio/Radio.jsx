import { useState } from "react";
import cx from "classnames";
import styles from "./Radio.module.css";

export const Radio = ({
  id,
  name,
  type="radio",
  onChange,
  labelValue,
  isRadioChecked = false,
  noIco,
  className,
  ...props
}) => {
  const [radioChecked, setRadioChecked] = useState(isRadioChecked);

  const handleRadio = ({ target: { checked } }) => {
    setRadioChecked(checked);
  };

  return (
    <div className={cx(styles.radio, styles.blockRadio)}>
      <div className={styles.radioContent}>
        <input
          id={id}
          name={name}
          type={type}
          checked={radioChecked}
          onChange={handleRadio}
          className={styles.radioInput}
        />
        <label
          className={
            noIco
              ? cx(styles.radioLabel, styles.radioLabelNoIco)
              : styles.radioLabel
          }
          htmlFor={id}
        >
          {labelValue}
        </label>
      </div>
    </div>
  );
};
