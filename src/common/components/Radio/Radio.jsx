import cx from "classnames";
import styles from "./Radio.module.css";

export const Radio = ({
  id,
  name,
  labelValue,
  checked = false,
  onChange = () => {},
  noIcon,
}) => {

  return (
    <div className={styles.radio}>
      <div className={styles.radioContent}>
        <input
          id={id}
          name={name}
          type='radio'
          checked={checked}
          onChange={onChange}
          className={styles.radioInput}
        />
        <label
          className={cx(styles.radioLabel, {[styles.radioLabelNoIcon]: noIcon,})}
          htmlFor={id}
        >
          {labelValue}
        </label>
      </div>
    </div>
  );
};
