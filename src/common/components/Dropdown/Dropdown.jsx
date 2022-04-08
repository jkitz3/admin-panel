import cx from "classnames";
import styles from "./Dropdown.module.css";

export const Dropdown = ({ children }) => {
  return (
    <div className={cx(styles.Dropdown, styles.dropdownBlock)}>
      {children}
    </div>
  );
};
