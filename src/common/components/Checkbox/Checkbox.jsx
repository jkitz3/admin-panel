import cx from "classnames";
import styles from "./Checkbox.module.css";

export const Checkbox = ({
  id,
  labelValue,
  checked = false,
  className,
  ...props
}) => {
  return (
    <div className={cx(styles.checkbox, className)}>
      <div className={styles.checkboxContent}>
        <input
          id={id}
          type="checkbox"
          defaultChecked={checked}
          className={styles.checkboxInput}
          {...props}
        />
        <label className={styles.checkboxLabel} htmlFor={id}>
          {labelValue}
        </label>
      </div>
    </div>
  );
};
