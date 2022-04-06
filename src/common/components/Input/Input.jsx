import { useState } from "react";
import { SvgLocked, SvgXMedium } from "../../iconComponents";
import cx from "classnames";
import styles from "./Input.module.css";

export const Input = ({
  id,
  type,
  value,
  placeholder,
  disabled = false,
  isInputIncorrect = false,
  className,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputValue = ({ target: { value } }) => {
    setInputValue(value);
  };

  const clearInputValue = () => {
    setInputValue("");
  };

  const inputClassNames = cx(styles.input, styles.orderDateInput, {
    [styles.orderDateInputIncorrect]: isInputIncorrect,
    [styles.orderDateInputDisabled]: disabled,
  });

  return (
    <div className={styles.blockOrderDate}>
      <div className={styles.orderDateContent}>
        <input
          id={id}
          type={type}
          value={inputValue}
          placeholder={placeholder}
          onChange={handleInputValue}
          className={inputClassNames}
        />
        {inputValue && (
          <button onClick={clearInputValue} className={styles.button}>
            <SvgXMedium className={styles.buttonXButton} />
          </button>
        )}
        {disabled && <SvgLocked className={styles.orderDateIconDisabled} />}
      </div>
    </div>
  );
};
