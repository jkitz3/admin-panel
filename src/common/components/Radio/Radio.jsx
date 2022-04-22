import cx from "classnames";
import styles from "./Radio.module.css";

export const Radio = ({
  id,
  name,
  labelValue,
  checked = false,
  noIcon,
  className,
  ...props
}) => {
  return (
    <div className={cx(styles.radio, className)}>
      <div className={styles.radioContent}>
        <input
          id={id}
          name={name}
          type="radio"
          defaultChecked={checked}
          className={styles.radioInput}
          {...props}
        />
        <label
          className={cx(styles.radioLabel, {
            [styles.radioLabelNoIcon]: noIcon,
          })}
          htmlFor={id}
        >
          {labelValue}
        </label>
      </div>
    </div>
  );
};
