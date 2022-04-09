import cx from "classnames";
import styles from "./Dropdown.module.css";

export const Dropdown = ({
   children,
   isCheckboxRadioDropdown,
   dropdownTitle,
  }) => {
  const dropdownClassNames = cx(styles.dropdownBlock, styles.dropdown, {
    [styles.checkboxRadioDropdown]: isCheckboxRadioDropdown,
  });

  return (
    <div className={dropdownClassNames}>
      {dropdownTitle && <div className={styles.dropdownTitle}>
        {dropdownTitle}
      </div>}    
      {children}
    </div>
  );
};
