import cx from "classnames";
import styles from "./Button.module.css";

export const Button = ({
  value,
  onClick = () => {},
  themeBlue,
  themeLink,
  themeText,
  sizeDefault,
  sizeSmall,
  iconOnly,
  isFullWidth = false,
  buttonIcon: ButtonIcon,
  isButtonClicked,
  isButtonVisible,
  className,
  ...props
}) => {
  const buttonClassNames = cx(styles.button, {
    [styles.buttonThemeBlue]: themeBlue,
    [styles.buttonThemeLink]: themeLink,
    [styles.buttonThemeText]: themeText,
    [styles.buttonSizeDefault]: sizeDefault,
    [styles.buttonSizeSmall]: sizeSmall,
    [styles.buttonIconOnly]: iconOnly,
    [styles.buttonFullWidth]: isFullWidth,
  });

  return (
    <button onClick={onClick} className={buttonClassNames}>
      {ButtonIcon && <ButtonIcon className={styles.buttonIcon} />}
      {!iconOnly && <span className={styles.buttonText}>{value}</span>}
    </button>
  );
};
