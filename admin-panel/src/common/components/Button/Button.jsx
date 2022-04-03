import cx from "classnames";
import styles from "./Button.module.css";

export const Button = ({
  children,
  className,
  value,
  onClick,
  isButtonClicked,
  isButtonVisible,
  ...props
}) => {
  return (
    <>
      <div className={styles.blockButtonBlock}>
        <div className={styles.buttonBlockContent}>
          <div className={styles.buttonBlockWrapper}>
            <button
              className={cx(
                styles.button,
                styles.buttonThemeBlue,
                styles.buttonSizeDefault
              )}
            >
              <svg
                className={styles.icon}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="8" stroke="none" />
              </svg>
              <span className={styles.buttonText}>Text here</span>
            </button>
            <button
              className={cx(
                styles.button,
                styles.buttonThemeBlue,
                styles.buttonSizeDefault
              )}
            >
              <span className={styles.buttonText}>Text here</span>
            </button>
            <button
              className={cx(
                styles.button,
                styles.buttonThemeBlue,
                styles.buttonSizeDefault,
                styles.buttonIconOnly
              )}
            >
              <svg
                className={styles.icon}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="8" stroke="none" />
              </svg>
            </button>
          </div>
          <div className={styles.buttonBlockWrapper}>
            <button
              className={cx(
                styles.button,
                styles.buttonThemeBlue,
                styles.buttonSizeSmall
              )}
            >
              <svg
                className={styles.icon}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="8" stroke="none" />
              </svg>
              <span className={styles.buttonText}>Text here</span>
            </button>
            <button
              className={cx(
                styles.button,
                styles.buttonThemeBlue,
                styles.buttonSizeSmall
              )}
            >
              <span className={styles.buttonText}>Text here</span>
            </button>
            <button
              className={cx(
                styles.button,
                styles.buttonThemeBlue,
                styles.buttonSizeSmall,
                styles.buttonIconOnly
              )}
            >
              <svg
                className={styles.icon}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="8" stroke="none" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.blockButtonBlock}>
        <div className={styles.buttonBlockContent}>
          <div className={styles.buttonBlockWrapper}>
            <button
              className={cx(
                styles.button,
                styles.buttonThemeLink,
                styles.buttonSizeDefault
              )}
            >
              <svg
                className={styles.icon}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="8" stroke="none" />
              </svg>
              <span className={styles.buttonText}>Text here</span>
            </button>
            <button
              className={cx(
                styles.button,
                styles.buttonThemeLink,
                styles.buttonSizeDefault
              )}
            >
              <span className={styles.buttonText}>Text here</span>
            </button>
            <button
              className={cx(
                styles.button,
                styles.buttonThemeLink,
                styles.buttonSizeDefault,
                styles.buttonIconOnly
              )}
            >
              <svg
                className={styles.icon}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="8" stroke="none" />
              </svg>
            </button>
          </div>
          <div className={styles.buttonBlockWrapper}>
            <button
              className={cx(
                styles.button,
                styles.buttonThemeLink,
                styles.buttonSizeSmall
              )}
            >
              <svg
                className={styles.icon}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="8" stroke="none" />
              </svg>
              <span className={styles.buttonText}>Text here</span>
            </button>
            <button
              className={cx(
                styles.button,
                styles.buttonThemeLink,
                styles.buttonSizeSmall
              )}
            >
              <span className={styles.buttonText}>Text here</span>
            </button>
            <button
              className={cx(
                styles.button,
                styles.buttonThemeLink,
                styles.buttonSizeSmall,
                styles.buttonIconOnly
              )}
            >
              <svg
                className={styles.icon}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="8" stroke="none" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.blockButtonBlock}>
        <div className={styles.buttonBlockContent}>
          <div className={styles.buttonBlockWrapper}>
            <button
              className={cx(
                styles.button,
                styles.buttonThemeText,
                styles.buttonSizeDefault
              )}
            >
              <svg
                className={styles.icon}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="8" stroke="none" />
              </svg>
              <span className={styles.buttonText}>Text here</span>
            </button>
            <button
              className={cx(
                styles.button,
                styles.buttonThemeText,
                styles.buttonSizeDefault
              )}
            >
              <span className={styles.buttonText}>Text here</span>
            </button>
            <button
              className={cx(
                styles.button,
                styles.buttonThemeText,
                styles.buttonSizeDefault,
                styles.buttonIconOnly
              )}
            >
              <svg
                className={styles.icon}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="8" stroke="none" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
