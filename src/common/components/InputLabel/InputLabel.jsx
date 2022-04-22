import cx from "classnames";
import styles from "./InputLabel.module.css";

export const InputLabel = ({ children, htmlFor, className }) => {
  return (
    <label className={cx(styles.inputLabel, className)} htmlFor={htmlFor}>
      {children}
    </label>
  );
};
