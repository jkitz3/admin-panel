import cx from "classnames";
import styles from "./Button.module.css";

export const Button = ({
  theme='blue',
  size='default',
  isFullWidth = false,
  buttonIcon: ButtonIcon,
  onClick = () => {},
  children,
  className,
}) => {
  const buttonClassNames = cx(styles.button, className, {
    [styles[`theme_${theme}`]]: !!theme,
    [styles[`size_${size}`]]: !!size,
    [styles.buttonIconOnly]: !!ButtonIcon && !children,
    [styles.buttonFullWidth]: isFullWidth,
  });

  return (
    <button onClick={onClick} className={buttonClassNames}>
      {ButtonIcon && <ButtonIcon className={styles.buttonIcon} />}
      {children && <span className={styles.buttonText}>{children}</span>}
    </button>
  );
};
