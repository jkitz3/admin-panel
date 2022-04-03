import { useState } from "react";
import cx from "classnames";
import styles from "./SearchBar.module.css";

export const SearchBar = ({
  children,
  className,
  value,
  onChange,
  ...props
}) => {
  const [searchbarInputEmptyValue, setSearchbarInputEmptyValue] = useState("");
  const [searchbarInputCorrectValue, setSearchbarInputCorrectValue] =
    useState("50744");

  const handleSearchbarInputEmptyValue = ({ target: { value } }) => {
    setSearchbarInputEmptyValue(value);
  };

  const handleSearchbarInputCorrectValue = ({ target: { value } }) => {
    setSearchbarInputCorrectValue(value);
  };

  const clearSearchbarInputEmptyValue = () => {
    setSearchbarInputEmptyValue("");
  };

  const clearSearchbarInputCorrectValue = () => {
    setSearchbarInputCorrectValue("");
  };

  return (
    <>
      <div className={styles.blockSearchbar}>
        <div className={styles.searchbarContent}>
          <div className={styles.searchbarIcon}></div>
          <input
            className={cx(styles.input, styles.searchbarInput)}
            placeholder="Номер заказа или ФИО"
            type="text"
            value={searchbarInputEmptyValue}
            onChange={handleSearchbarInputEmptyValue}
          />
          {searchbarInputEmptyValue && (
            <button
              className={cx(styles.button, styles.buttonXButton)}
              onClick={clearSearchbarInputEmptyValue}
            ></button>
          )}
        </div>
      </div>
      <div className={styles.blockSearchbar}>
        <div className={styles.searchbarContent}>
          <div className={styles.searchbarIcon}></div>
          <input
            className={cx(styles.input, styles.searchbarInput)}
            placeholder="Номер заказа или ФИО"
            type="text"
            value={searchbarInputCorrectValue}
            onChange={handleSearchbarInputCorrectValue}
          />
          {searchbarInputCorrectValue && (
            <button
              className={cx(styles.button, styles.buttonXButton)}
              onClick={clearSearchbarInputCorrectValue}
            ></button>
          )}
        </div>
      </div>
    </>
  );
};
