import cx from "classnames";
import styles from "./UiKit.module.css";
import {
  Label,
  Input,
  Checkbox,
  Radio,
  Button,
  Dropdown,
} from "../../common/components";
import { Search, DotLarge } from "../../icons";

export const UiKit = () => {
  return (
    <div className={styles.uiKit}>
      <div className={styles.uiKitBlock}>
        <div className={styles.blockTitle}>Input</div>
        <div className={styles.blockContent}>
          <Label labelValue="Дата и время заказа" htmlFor="orderDateBlank" />
          <Input
            id="orderDateBlank"
            type="text"
            value=""
            placeholder="Введите"
            hasLabel
          />
          <Label
            labelValue="Дата и время заказа"
            htmlFor="orderDateIncorrect"
          />
          <Input
            id="orderDateIncorrect"
            type="text"
            value="06.12.2021"
            placeholder="Введите"
            isInputIncorrect
            hasLabel
          />
          <Label labelValue="Дата и время заказа" htmlFor="orderDateDisabled" />
          <Input
            id="orderDateDisabled"
            type="text"
            value="06.12.2021"
            disabled
            hasLabel
          />
        </div>
      </div>
      <div className={cx(styles.uiKitBlock, styles.uiKitBlockSearchbar)}>
        <div className={styles.blockTitle}>SearchBar</div>
        <div className={styles.blockContent}>
          <Input
            id="searchBar"
            type="text"
            value=""
            placeholder="Номер заказа или ФИО"
            inputIcon={Search}
          />
          <Input
            id="searchBar"
            type="text"
            value="50744"
            placeholder="Номер заказа или ФИО"
            inputIcon={Search}
          />
        </div>
      </div>
      <div className={cx(styles.uiKitBlock, styles.uiKitBlockSizeSmall)}>
        <div className={styles.blockTitle}>Checkbox</div>
        <div
          className={cx(styles.blockContent, styles.blockContentCheckboxRadio)}
        >
          <Checkbox id="checkbox_1" type="checkbox" isCheckboxChecked />
          <Checkbox id="checkbox_2" type="checkbox" />
        </div>
      </div>
      <div className={cx(styles.uiKitBlock, styles.uiKitBlockSizeSmall)}>
        <div className={styles.blockTitle}>Radio</div>
        <div
          className={cx(styles.blockContent, styles.blockContentCheckboxRadio)}
        >
          <Radio id="radio_1" name="radio-name" type="radio" />
          <Radio id="radio_2" name="radio-name" type="radio" isRadioChecked />
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
                <Button
                  value="Text here"
                  themeBlue
                  sizeDefault
                  buttonIcon={DotLarge}
                />
                <Button value="Text here" themeBlue sizeDefault />
                <Button themeBlue sizeDefault iconOnly buttonIcon={DotLarge} />
              </div>
              <div className={styles.buttonBlockWrapper}>
                <Button
                  value="Text here"
                  themeBlue
                  sizeSmall
                  buttonIcon={DotLarge}
                />
                <Button value="Text here" themeBlue sizeSmall />
                <Button themeBlue sizeSmall iconOnly buttonIcon={DotLarge} />
              </div>
            </div>
          </div>
          <div className={styles.blockButtonBlock}>
            <div className={styles.buttonBlockContent}>
              <div className={styles.buttonBlockWrapper}>
                <Button
                  value="Text here"
                  themeLink
                  sizeDefault
                  buttonIcon={DotLarge}
                />
                <Button value="Text here" themeLink sizeDefault />
                <Button themeLink sizeDefault iconOnly buttonIcon={DotLarge} />
              </div>
              <div className={styles.buttonBlockWrapper}>
                <Button
                  value="Text here"
                  themeLink
                  sizeSmall
                  buttonIcon={DotLarge}
                />
                <Button value="Text here" themeLink sizeSmall />
                <Button themeLink sizeSmall iconOnly buttonIcon={DotLarge} />
              </div>
            </div>
          </div>
          <div className={styles.blockButtonBlock}>
            <div className={styles.buttonBlockContent}>
              <div className={styles.buttonBlockWrapper}>
                <Button
                  value="Text here"
                  themeText
                  sizeDefault
                  buttonIcon={DotLarge}
                />
                <Button value="Text here" themeText sizeDefault />
                <Button themeText sizeDefault iconOnly buttonIcon={DotLarge} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx(styles.uiKitBlock, styles.uiKitBlockDropdown)}>
        <div className={styles.blockTitle}>Dropdown</div>
        <div className={styles.blockContent}>
          <div className={styles.dropdownWrapper}>
            <Dropdown>
              <Checkbox id="checkbox_new" type="checkbox" labelValue="Новый" />
              <Checkbox
                id="checkbox_calc"
                type="checkbox"
                labelValue="Рассчет"
              />
              <Checkbox
                id="checkbox_approved"
                type="checkbox"
                labelValue="Подтвержден"
                isCheckboxChecked
              />
              <Checkbox
                id="checkbox_delayed"
                type="checkbox"
                labelValue="Отложен"
              />
              <Checkbox
                id="checkbox_completed"
                type="checkbox"
                labelValue="Выполнен"
              />
              <Checkbox
                id="checkbox_canceled"
                type="checkbox"
                labelValue="Отменен"
              />
            </Dropdown>
            <Dropdown>
              <Radio
                id="radio_new"
                name="radio-dropdown"
                type="radio"
                labelValue="Новый"
              />
              <Radio
                id="radio_calc"
                name="radio-dropdown"
                type="radio"
                labelValue="Рассчет"
              />
              <Radio
                id="radio_approved"
                name="radio-dropdown"
                type="radio"
                labelValue="Подтвержден"
                isRadioChecked
              />
              <Radio
                id="radio_delayed"
                name="radio-dropdown"
                type="radio"
                labelValue="Отложен"
              />
              <Radio
                id="radio_completed"
                name="radio-dropdown"
                type="radio"
                labelValue="Выполнен"
              />
              <Radio
                id="radio_canceled"
                name="radio-dropdown"
                type="radio"
                labelValue="Отменен"
              />
            </Dropdown>
          </div>
          <div className={styles.dropdownWrapper}>
            <Dropdown />
            <Dropdown />
            <Dropdown />
          </div>
        </div>
      </div>
    </div>
  );
};
