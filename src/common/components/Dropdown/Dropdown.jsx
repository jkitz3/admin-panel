import cx from "classnames";
import styles from "./Dropdown.module.css";

export const Dropdown = ({ children, dropdownTitle, className }) => {
  const dropdownClassNames = cx(styles.dropdown, className);

  return (
    <div className={dropdownClassNames}>
      {dropdownTitle && (
        <div className={styles.dropdownTitle}>{dropdownTitle}</div>
      )}
      {children}
    </div>
  );
};
