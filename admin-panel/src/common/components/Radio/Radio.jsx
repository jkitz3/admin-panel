import { useState } from "react";
import cx from "classnames";
import styles from "./Radio.module.css";

export const Radio = ({
  children,
  className,
  value,
  onChange,
  isRadioChecked,
  ...props
}) => {
  const [radioOneChecked, setRadioOneChecked] = useState("");
  const [radioTwoChecked, setRadioTwoChecked] = useState("checked");

  const handleRadioOne = ({ target: { checked } }) => {
    setRadioOneChecked(checked);
  };

  const handleRadioTwo = ({ target: { checked } }) => {
    setRadioTwoChecked(checked);
  };

  return (
    <>
      <div className={cx(styles.radio, styles.blockRadio)}>
        <div className={styles.radioContent}>
          <input
            className={styles.radioInput}
            name="radio-name"
            type="radio"
            checked={radioOneChecked}
            onChange={handleRadioOne}
            id="radio_1"
          />
          <label className={styles.radioContainer} htmlFor="radio_1"></label>
        </div>
      </div>
      <div className={cx(styles.radio, styles.blockRadio)}>
        <div className={styles.radioContent}>
          <input
            className={styles.radioInput}
            name="radio-name"
            type="radio"
            checked={radioTwoChecked}
            onChange={handleRadioTwo}
            id="radio_2"
          />
          <label className={styles.radioContainer} htmlFor="radio_2"></label>
        </div>
      </div>
    </>
  );
}

