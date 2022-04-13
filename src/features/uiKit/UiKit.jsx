import { useState } from "react";
import cx from "classnames";
import styles from "./UiKit.module.css";
import {
  InputLabel,
  Input,
  Checkbox,
  Radio,
  Button,
  Dropdown,
} from "../../common/components";
import { DotLarge, Moon, Search, Sun } from "../../icons";

export const UiKit = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = ({ target: { value } }) => {
    setInputValue(value);
  };

  const onReset = () => {
    setInputValue("");
  };

  const [checked, setChecked] = useState(false);

  const handleCheckbox = ({ target: { checked } }) => {
    setChecked(checked);
  };

  const handleRadio = ({ target: { checked } }) => {
    setChecked(checked);
  };

  return (
    <div className={styles.uiKit}>
      <div className={styles.uiKitBlock}>
        <div className={styles.blockTitle}>Input</div>
        <div className={styles.blockContent}>
          <InputLabel htmlFor="orderDateBlank" className={styles.inputLabel}>
            Дата и время заказа{" "}
          </InputLabel>
          <Input
            id="orderDateBlank"
            value={inputValue}
            placeholder="Введите"
            onChange={handleInputValue}
            onClick={onReset}
            className={styles.inputInput}
          />
          <InputLabel
            htmlFor="orderDateIncorrect"
            className={styles.inputLabel}
          >
            Дата и время заказа
          </InputLabel>
          <Input
            id="orderDateIncorrect"
            value="06.12.2021"
            placeholder="Введите"
            isInputIncorrect
            className={styles.inputInput}
          />
          <InputLabel htmlFor="orderDateDisabled" className={styles.inputLabel}>
            Дата и время заказа
          </InputLabel>
          <Input
            id="orderDateDisabled"
            value="06.12.2021"
            disabled
            className={styles.inputInput}
          />
        </div>
      </div>
      <div className={cx(styles.uiKitBlock, styles.uiKitBlockSearchbar)}>
        <div className={styles.blockTitle}>SearchBar</div>
        <div className={styles.blockContent}>
          <Input
            id="searchBar"
            value=""
            placeholder="Номер заказа или ФИО"
            onChange={handleInputValue}
            onClick={onReset}
            inputIcon={Search}
            className={styles.searchbarInput}
          />
          <Input
            id="searchBar"
            value="50744"
            placeholder="Номер заказа или ФИО"
            onChange={handleInputValue}
            onClick={onReset}
            inputIcon={Search}
            className={styles.searchbarInput}
          />
        </div>
      </div>
      <div className={cx(styles.uiKitBlock, styles.uiKitBlockSizeSmall)}>
        <div className={styles.blockTitle}>Checkbox</div>
        <div
          className={cx(styles.blockContent, styles.blockContentCheckboxRadio)}
        >
          <Checkbox
            id="checkbox_1"
            checked={checked}
            onChange={handleCheckbox}
          />
          <Checkbox
            id="checkbox_2"
            checked={checked}
            onChange={handleCheckbox}
          />
        </div>
      </div>
      <div className={cx(styles.uiKitBlock, styles.uiKitBlockSizeSmall)}>
        <div className={styles.blockTitle}>Radio</div>
        <div
          className={cx(styles.blockContent, styles.blockContentCheckboxRadio)}
        >
          <Radio
            id="radio_1"
            name="radio-name"
            checked={checked}
            onChange={handleRadio}
          />
          <Radio
            id="radio_2"
            name="radio-name"
            checked={checked}
            onChange={handleRadio}
          />
        </div>
      </div>
      <div className={cx(styles.uiKitBlock, styles.uiKitBlockButtonBlock)}>
        <div className={styles.blockTitle}>Button</div>
        <div
          className={cx(styles.blockContent, styles.blockContentButtonBlock)}
        >
          <div className={styles.blockButtonBlock}>
            <div className={styles.buttonBlockContent}>
              <div className={styles.buttonBlockWrapper}>
                <Button buttonIcon={DotLarge} className={styles.buttonButton}>
                  Text here
                </Button>
                <Button className={styles.buttonButton}>Text here</Button>
                <Button buttonIcon={DotLarge} className={styles.buttonButton} />
              </div>
              <div className={styles.buttonBlockWrapper}>
                <Button
                  size="small"
                  buttonIcon={DotLarge}
                  className={styles.buttonButton}
                >
                  Text here
                </Button>
                <Button size="small" className={styles.buttonButton}>
                  Text here
                </Button>
                <Button
                  size="small"
                  buttonIcon={DotLarge}
                  className={styles.buttonButton}
                />
              </div>
            </div>
          </div>
          <div className={styles.blockButtonBlock}>
            <div className={styles.buttonBlockContent}>
              <div className={styles.buttonBlockWrapper}>
                <Button
                  theme="link"
                  buttonIcon={DotLarge}
                  className={styles.buttonButton}
                >
                  Text here
                </Button>
                <Button theme="link" className={styles.buttonButton}>
                  Text here
                </Button>
                <Button
                  theme="link"
                  buttonIcon={DotLarge}
                  className={styles.buttonButton}
                />
              </div>
              <div className={styles.buttonBlockWrapper}>
                <Button
                  theme="link"
                  size="small"
                  buttonIcon={DotLarge}
                  className={styles.buttonButton}
                >
                  Text here
                </Button>
                <Button
                  theme="link"
                  size="small"
                  className={styles.buttonButton}
                >
                  Text here
                </Button>
                <Button
                  theme="link"
                  size="small"
                  buttonIcon={DotLarge}
                  className={styles.buttonButton}
                />
              </div>
            </div>
          </div>
          <div className={styles.blockButtonBlock}>
            <div className={styles.buttonBlockContent}>
              <div className={styles.buttonBlockWrapper}>
                <Button
                  theme="text"
                  buttonIcon={DotLarge}
                  className={styles.buttonButton}
                >
                  Text here
                </Button>
                <Button theme="text" className={styles.buttonButton}>
                  Text here
                </Button>
                <Button
                  theme="text"
                  buttonIcon={DotLarge}
                  className={styles.buttonButton}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx(styles.uiKitBlock, styles.uiKitBlockDropdown)}>
        <div className={styles.blockTitle}>Dropdown</div>
        <div className={styles.blockContent}>
          <div className={styles.dropdownWrapper}>
            <Dropdown className={styles.dropdownBlock}>
              <Checkbox id="checkbox_new" labelValue="Новый" />
              <Checkbox id="checkbox_calc" labelValue="Рассчет" />
              <Checkbox
                id="checkbox_approved"
                labelValue="Подтвержден"
                checked
              />
              <Checkbox id="checkbox_delayed" labelValue="Отложен" />
              <Checkbox id="checkbox_completed" labelValue="Выполнен" />
              <Checkbox id="checkbox_canceled" labelValue="Отменен" />
            </Dropdown>
            <Dropdown className={styles.dropdownBlock}>
              <Radio
                id="radio_new"
                name="radio-dropdown"
                labelValue="Новый"
                noIcon
              />
              <Radio
                id="radio_calc"
                name="radio-dropdown"
                labelValue="Рассчет"
                noIcon
              />
              <Radio
                id="radio_approved"
                name="radio-dropdown"
                labelValue="Подтвержден"
                checked
                noIcon
              />
              <Radio
                id="radio_delayed"
                name="radio-dropdown"
                labelValue="Отложен"
                noIcon
              />
              <Radio
                id="radio_completed"
                name="radio-dropdown"
                labelValue="Выполнен"
                noIcon
              />
              <Radio
                id="radio_canceled"
                name="radio-dropdown"
                labelValue="Отменен"
                noIcon
              />
            </Dropdown>
          </div>
          <div className={styles.dropdownWrapper}>
            <Dropdown
              dropdownTitle="Номер страницы"
              className={styles.dropdownBlock}
            >
              <Input placeholder="Введите номер" />
            </Dropdown>
            <Dropdown
              dropdownTitle="Удалить n записей?"
              className={styles.dropdownBlock}
            >
              <Button
                theme="link"
                size="small"
                isFullWidth
                className={styles.dropdownButton}
              >
                Удалить
              </Button>
              <Button
                size="small"
                isFullWidth
                className={styles.dropdownButton}
              >
                Отмена
              </Button>
            </Dropdown>
            <Dropdown
              dropdownTitle="Выберите тему"
              className={styles.dropdownBlock}
            >
              <Button
                theme="link"
                size="small"
                isFullWidth
                buttonIcon={Sun}
                className={styles.dropdownButton}
              >
                Светлая
              </Button>
              <Button
                size="small"
                isFullWidth
                buttonIcon={Moon}
                className={styles.dropdownButton}
              >
                Темная
              </Button>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};
