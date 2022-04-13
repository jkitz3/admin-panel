import cx from "classnames";
import styles from "./Input.module.css";
import { Locked, XMedium } from "../../../icons";

export const Input = ({
  id,
  value = "",
  placeholder,
  disabled,
  isInputIncorrect,
  inputIcon: InputIcon,
  onChange = () => {},
  onClick = () => {},
  className,
  ...props
}) => {

  const inputClassNames = cx(styles.input, {
    [styles.inputDisabled]: disabled,
    [styles.inputIncorrect]: isInputIncorrect,
    [styles.inputWithIcon]: InputIcon,
    [styles.inputWithValue]: value,
  });

  return (
    <div className={className}>
      <div className={styles.blockContent}>
        {InputIcon && <InputIcon className={styles.inputIcon} />}
        <input
          id={id}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={inputClassNames}
          {...props}
        />
        {value && !disabled && (
          <button onClick={onClick} className={styles.button}>
            <XMedium className={styles.xButton} />
          </button>
        )}
        {disabled && <Locked className={styles.iconDisabled} />}
      </div>
    </div>
  );
};
