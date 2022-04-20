import cx from "classnames";
import styles from "./Input.module.css";
import { Locked, XMedium } from "../../../icons";

export const Input = ({
  id,
  name,
  value = "",
  placeholder,
  disabled,
  isIncorrect,
  icon: Icon,
  onChange = () => {},
  onReset = () => {},
  className,
  ...props
}) => {
  const inputClassNames = cx(styles.input, {
    [styles.inputDisabled]: disabled,
    [styles.inputIncorrect]: isIncorrect,
    [styles.inputWithIcon]: Icon,
    [styles.inputWithValue]: value,
  });

  return (
    <div className={className}>
      <div className={styles.blockContent}>
        {Icon && <Icon className={styles.inputIcon} />}
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
          <button name={name} onClick={onReset} className={styles.button}>
            {value && <XMedium className={styles.xButton} />}
          </button>
        )}
        {disabled && <Locked className={styles.iconDisabled} />}
      </div>
    </div>
  );
};
