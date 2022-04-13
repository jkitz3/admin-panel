import cx from "classnames";
import styles from "./Dropdown.module.css";

export const Dropdown = ({
  children,
  isCheckboxRadioDropdown,
  dropdownTitle,
  className,
}) => {
  const dropdownClassNames = cx(styles.dropdown, className, {
    [styles.checkboxRadioDropdown]: isCheckboxRadioDropdown,
  });

  return (
    <div className={dropdownClassNames}>
      {dropdownTitle && (
        <div className={styles.dropdownTitle}>{dropdownTitle}</div>
      )}
      {children}
    </div>
  );
};
