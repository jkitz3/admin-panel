import { useState } from "react";
import cx from "classnames";
import styles from "./Input.module.css";

export const Input = ({
  children,
  className,
  value,
  onChange,
  isInputIncorrect = true,
  isInputDisabled,
  ...props
}) => {
  const [inputEmptyValue, setInputEmptyValue] = useState("");
  const [inputIncorrectValue, setInputIncorrectValue] = useState("06.12.2021");

  const handleInputEmptyValue = ({ target: { value } }) => {
    setInputEmptyValue(value);
  };

  const handleInputIncorrectValue = ({ target: { value } }) => {
    setInputIncorrectValue(value);
  };

  const clearInputEmptyValue = () => {
    setInputEmptyValue("");
  };

  const clearInputIncorrectValue = () => {
    setInputIncorrectValue("");
  };

  return (
    <>
      <div className={styles.blockOrderDate}>
        <label className={styles.orderDateTitle} htmlFor="orderDateBlank">
          Дата и время заказа
        </label>
        <div className={styles.orderDateContent}>
          <input
            className={cx(styles.input, styles.orderDateInput)}
            placeholder="Введите"
            type="text"
            id="orderDateBlank"
            value={inputEmptyValue}
            onChange={handleInputEmptyValue}
          />
          {inputEmptyValue && (
            <button
              className={cx(styles.button, styles.buttonXButton)}
              onClick={clearInputEmptyValue}
            ></button>
          )}
        </div>
      </div>
      <div className={styles.blockOrderDate}>
        <label className={styles.orderDateTitle} htmlFor="orderDateIncorrect">
          Дата и время заказа
        </label>
        <div className={styles.orderDateContent}>
          <input
            className={cx(
              styles.input,
              styles.orderDateInput,
              inputIncorrectValue && styles.orderDateInputIncorrect
            )}
            placeholder="Введите"
            type="text"
            id="orderDateIncorrect"
            value={inputIncorrectValue}
            onChange={handleInputIncorrectValue}
          />
          {inputIncorrectValue && (
            <button
              className={cx(styles.button, styles.buttonXButton)}
              onClick={clearInputIncorrectValue}
            ></button>
          )}
        </div>
      </div>
      <div className={styles.blockOrderDate}>
        <p className={styles.orderDateTitle}>Дата и время заказа</p>
        <div className={styles.orderDateContent}>
          <input
            className={cx(
              styles.input,
              styles.orderDateInput,
              styles.orderDateInputDisabled
            )}
            placeholder="Введите"
            type="text"
            defaultValue="06.12.2021"
          />
          <div className={styles.orderDateIconDisabled}></div>
        </div>
      </div>
    </>
  );
};
