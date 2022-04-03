import { useState } from "react";
import cx from "classnames";
import styles from "./Dropdown.module.css";

export const Dropdown = ({
  children,
  className,
  value,
  onChange,
  isDropdownOpen,
  ...props
}) => {
  const [pageNumberInputValue, setPageNumberInputValue] = useState("");

  const handlePageNumberInputValue = ({ target: { value } }) => {
    setPageNumberInputValue(value);
  };

  return (
    <>
      <div className={styles.dropdownWrapper}>
        <div className={cx(styles.checkboxDropdown, styles.dropdownBlockCheckbox)}>
          <div className={styles.checkboxDropdownItem}>
            <div className={cx(styles.checkbox, styles.checkboxDropdownCheckbox)}>
              <div className={styles.checkboxContent}>
                <input
                  className={styles.checkboxInput}
                  type="checkbox"
                  id="checkbox_new"
                />
                <label className={styles.checkboxContainer} htmlFor="checkbox_new">Новый</label>
              </div>
            </div>
          </div>
          <div className={styles.checkboxDropdownItem}>
            <div className={cx(styles.checkbox, styles.checkboxDropdownCheckbox)}>
              <div className={styles.checkboxContent}>
                <input
                  className={styles.checkboxInput}
                  type="checkbox"
                  id="checkbox_calc"
                />
                <label className={styles.checkboxContainer} htmlFor="checkbox_calc"
                  >Рассчет</label
                >
              </div>
            </div>
          </div>
          <div className={styles.checkboxDropdownItem}>
            <div className={cx(styles.checkbox, styles.checkboxDropdownCheckbox)}>
              <div className={styles.checkboxContent}>
                <input
                  className={styles.checkboxInput}
                  type="checkbox"
                  defaultChecked="checked"
                  id="checkbox_approved"
                />
                <label
                  className={styles.checkboxContainer}
                  htmlFor="checkbox_approved"
                  >Подтвержден</label
                >
              </div>
            </div>
          </div>
          <div className={styles.checkboxDropdownItem}>
            <div className={cx(styles.checkbox, styles.checkboxDropdownCheckbox)}>
              <div className={styles.checkboxContent}>
                <input
                  className={styles.checkboxInput}
                  type="checkbox"
                  id="checkbox_delayed"
                />
                <label
                  className={styles.checkboxContainer}
                  htmlFor="checkbox_delayed"
                  >Отложен</label
                >
              </div>
            </div>
          </div>
          <div className={styles.checkboxDropdownItem}>
            <div className={cx(styles.checkbox, styles.checkboxDropdownCheckbox)}>
              <div className={styles.checkboxContent}>
                <input
                  className={styles.checkboxInput}
                  type="checkbox"
                  id="checkbox_completed"
                />
                <label
                  className={styles.checkboxContainer}
                  htmlFor="checkbox_completed"
                  >Выполнен</label
                >
              </div>
            </div>
          </div>
          <div className={styles.checkboxDropdownItem}>
            <div className={cx(styles.checkbox, styles.checkboxDropdownCheckbox)}>
              <div className={styles.checkboxContent}>
                <input
                  className={styles.checkboxInput}
                  type="checkbox"
                  id="checkbox_canceled"
                />
                <label
                  className={styles.checkboxContainer}
                  htmlFor="checkbox_canceled"
                  >Отменен</label
                >
              </div>
            </div>
          </div>
        </div>
        <div className={cx(styles.radioDropdown, styles.dropdownBlockRadio)}>
          <div className={styles.radioDropdownItem}>
            <div className={cx(styles.radio, styles.radioDropdownRadio)}>
              <div className={styles.radioContent}>
                <input
                  className={styles.radioInput}
                  name="radio-dropdown"
                  type="radio"
                  id="radio_new"
                />
                <label
                  className={cx(styles.radioContainer, styles.radioContainerNoIco)}
                  htmlFor="radio_new"
                  >Новый</label
                >
              </div>
            </div>
          </div>
          <div className={styles.radioDropdownItem}>
            <div className={cx(styles.radio, styles.radioDropdownRadio)}>
              <div className={styles.radioContent}>
                <input
                  className={styles.radioInput}
                  name="radio-dropdown"
                  type="radio"
                  id="radio_calc"
                />
                <label
                  className={cx(styles.radioContainer, styles.radioContainerNoIco)}
                  htmlFor="radio_calc"
                  >Рассчет</label
                >
              </div>
            </div>
          </div>
          <div className={styles.radioDropdownItem}>
            <div className={cx(styles.radio, styles.radioDropdownRadio)}>
              <div className={styles.radioContent}>
                <input
                  className={styles.radioInput}
                  name="radio-dropdown"
                  type="radio"
                  defaultChecked="checked"
                  id="radio_approved"
                />
                <label
                  className={cx(styles.radioContainer, styles.radioContainerNoIco)}
                  htmlFor="radio_approved"
                  >Подтвержден</label
                >
              </div>
            </div>
          </div>
          <div className={styles.radioDropdownItem}>
            <div className={cx(styles.radio, styles.radioDropdownRadio)}>
              <div className={styles.radioContent}>
                <input
                  className={styles.radioInput}
                  name="radio-dropdown"
                  type="radio"
                  id="radio_delayed"
                />
                <label
                  className={cx(styles.radioContainer, styles.radioContainerNoIco)}
                  htmlFor="radio_delayed"
                  >Отложен</label
                >
              </div>
            </div>
          </div>
          <div className={styles.radioDropdownItem}>
            <div className={cx(styles.radio, styles.radioDropdownRadio)}>
              <div className={styles.radioContent}>
                <input
                  className={styles.radioInput}
                  name="radio-dropdown"
                  type="radio"
                  id="radio_completed"
                />
                <label
                  className={cx(styles.radioContainer, styles.radioContainerNoIco)}
                  htmlFor="radio_completed"
                  >Выполнен</label
                >
              </div>
            </div>
          </div>
          <div className={styles.radioDropdownItem}>
            <div className={cx(styles.radio, styles.radioDropdownRadio)}>
              <div className={styles.radioContent}>
                <input
                  className={styles.radioInput}
                  name="radio-dropdown"
                  type="radio"
                  id="radio_canceled"
                />
                <label
                  className={cx(styles.radioContainer, styles.radioContainerNoIco)}
                  htmlFor="radio_canceled"
                  >Отменен</label
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dropdownWrapper}>
        <div className={cx(styles.selectPage, styles.formBlockSelectPage)}>
          <span className={styles.selectPageTitle}>Номер страницы</span>
          <input
            className={cx(styles.input, styles.selectPageInput)}
            placeholder="Введите номер"
            type="text"
            id=""
            value={pageNumberInputValue}
            onChange={handlePageNumberInputValue}
          />
        </div>
        <div className={cx(styles.deleteRecord, styles.formBlockDeleteRecord)}>
          <span className={styles.deleteRecordTitle}>Удалить n записей?</span>
          <button
            className={cx(styles.button, styles.buttonFullWidth, styles.deleteRecordButton, styles.buttonThemeLink, styles.buttonSizeSmall)}
          >
            <span className={styles.buttonText}>Удалить</span>
          </button>
          <button
            className={cx(styles.button, styles.buttonFullWidth, styles.deleteRecordButton, styles.buttonThemeBlue, styles.buttonSizeSmall)}
          >
            <span className={styles.buttonText}>Отмена</span>
          </button>
        </div>
        <div className={cx(styles.selectTheme, styles.formBlockSelectTheme)}>
          <span className={styles.selectThemeTitle}>Выберите тему</span>
          <button
            className={cx(styles.button, styles.buttonFullWidth, styles.deleteRecordButton, styles.buttonThemeLink, styles.buttonSizeSmall)}
          >
            <svg
              className={cx(styles.icon, styles.selectThemeIcon, styles.selectThemeIconUnpushed)}
              viewBox="0 0 16 16"
              fill="#459DF5"
              strok="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="4" stroke="none" />
              <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none" />
              <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none" />
              <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none" />
              <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none" />
              <path
                d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z"
                stroke="none"
              />
              <path
                d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z"
                stroke="none"
              />
              <path
                d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z"
                stroke="none"
              />
              <path
                d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z"
                stroke="none"
              />
            </svg>
            <span className={styles.buttonText}>Светлая</span>
          </button>
          <button
            className={cx(styles.button, styles.buttonFullWidth, styles.deleteRecordButton, styles.buttonThemeBlue, styles.buttonSizeSmall)}
          >
            <svg
              className={cx(styles.icon, styles.selectThemeIcon, styles.selectThemeIconPushed)}
              viewBox="0 0 16 16"
              fill="#8055FF"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                stroke="none"
              />
            </svg>
            <span className={styles.buttonText}>Темная</span>
          </button>
        </div>
      </div>
    </>
  );
}

