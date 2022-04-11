import { useState } from "react";
import cx from "classnames";
import styles from "./Input.module.css";
import { Locked, XMedium } from "../../../icons";

export const Input = ({
  id,
  type = "text",
  value = "",
  placeholder,
  disabled,
  isInputIncorrect,
  inputIcon: InputIcon,
  hasLabel,
  hasXButton = true,
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

  const inputClassNames = cx(styles.input, {
    [styles.inputDisabled]: disabled,
    [styles.inputIncorrect]: isInputIncorrect,
    [styles.inputWithIcon]: InputIcon,
    [styles.inputNoXButton]: !hasXButton,
  });

  return (
    <div className={hasLabel ? styles.block : styles.noLabelBlock}>
      <div className={styles.blockContent}>
        {InputIcon && <InputIcon className={styles.inputIcon} />}
        <input
          id={id}
          type={type}
          value={inputValue}
          placeholder={placeholder}
          onChange={handleInputValue}
          className={inputClassNames}
        />
        {inputValue && hasXButton && (
          <button onClick={clearInputValue} className={styles.button}>
            <XMedium className={styles.xButton} />
          </button>
        )}
        {disabled && <Locked className={styles.iconDisabled} />}
      </div>
    </div>
  );
};
