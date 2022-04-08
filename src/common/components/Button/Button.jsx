import cx from "classnames";
import styles from "./Button.module.css";

export const Button = ({
  value,
  onClick=()=>{},
  themeBlue,
  themeLink,
  themeText,
  sizeDefault,
  sizeSmall,
  iconOnly,
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
  });

  return (
    <button
      onClick={onClick}
      className={buttonClassNames}
    >
      {ButtonIcon && <ButtonIcon className={styles.buttonIcon}/>}
      {!iconOnly && <span className={styles.buttonText}>{value}</span>}
    </button>
  );
};
