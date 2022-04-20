import cx from "classnames";
import styles from "./Button.module.css";

export const Button = ({
  theme = "blue",
  size = "default",
  isFullWidth = false,
  icon: Icon,
  onClick = () => {},
  children,
  className,
}) => {
  const buttonClassNames = cx(styles.button, className, {
    [styles[`theme_${theme}`]]: true,
    [styles[`size_${size}`]]: true,
    [styles.buttonIconOnly]: !!Icon && !children,
    [styles.buttonFullWidth]: isFullWidth,
  });

  return (
    <button onClick={onClick} className={buttonClassNames}>
      {Icon && <Icon className={styles.buttonIcon} />}
      {children && <span className={styles.buttonText}>{children}</span>}
    </button>
  );
};
