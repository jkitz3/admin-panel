import { useState } from "react";
import { SvgLocked, SvgXMedium } from "../../iconComponents";
import cx from "classnames";
import styles from "./Input.module.css";

export const Input = ({
  id,
  type,
  value,
  placeholder,
  disabled,
  isInputIncorrect,
  inputIcon: InputIcon,
  hasLabel,
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
        {inputValue && (
          <button onClick={clearInputValue} className={styles.button}>
            <SvgXMedium className={styles.xButton} />
          </button>
        )}
        {disabled && <SvgLocked className={styles.iconDisabled} />}
      </div>
    </div>
  );
};
