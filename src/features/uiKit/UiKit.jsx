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
  return (
    <div className={styles.uiKit}>
      <div className={styles.uiKitBlock}>
        <div className={styles.blockTitle}>Input</div>
        <div className={styles.blockContent}>
          <InputLabel htmlFor="orderDateBlank">Дата и время заказа</InputLabel>
          <Input id="orderDateBlank" value="" placeholder="Введите" hasLabel />
          <InputLabel htmlFor="orderDateIncorrect">
            Дата и время заказа
          </InputLabel>
          <Input
            id="orderDateIncorrect"
            value="06.12.2021"
            placeholder="Введите"
            isInputIncorrect
            hasLabel
          />
          <InputLabel htmlFor="orderDateDisabled">
            Дата и время заказа
          </InputLabel>
          <Input id="orderDateDisabled" value="06.12.2021" disabled hasLabel />
        </div>
      </div>
      <div className={cx(styles.uiKitBlock, styles.uiKitBlockSearchbar)}>
        <div className={styles.blockTitle}>SearchBar</div>
        <div className={styles.blockContent}>
          <Input
            id="searchBar"
            value=""
            placeholder="Номер заказа или ФИО"
            inputIcon={Search}
          />
          <Input
            id="searchBar"
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
          <Checkbox id="checkbox_1" isCheckboxChecked />
          <Checkbox id="checkbox_2" />
        </div>
      </div>
      <div className={cx(styles.uiKitBlock, styles.uiKitBlockSizeSmall)}>
        <div className={styles.blockTitle}>Radio</div>
        <div
          className={cx(styles.blockContent, styles.blockContentCheckboxRadio)}
        >
          <Radio id="radio_1" name="radio-name" />
          <Radio id="radio_2" name="radio-name" isRadioChecked />
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
                <Button themeBlue sizeDefault buttonIcon={DotLarge}>
                  Text here
                </Button>
                <Button themeBlue sizeDefault>
                  Text here
                </Button>
                <Button themeBlue sizeDefault iconOnly buttonIcon={DotLarge} />
              </div>
              <div className={styles.buttonBlockWrapper}>
                <Button themeBlue sizeSmall buttonIcon={DotLarge}>
                  Text here
                </Button>
                <Button themeBlue sizeSmall>
                  Text here
                </Button>
                <Button themeBlue sizeSmall iconOnly buttonIcon={DotLarge} />
              </div>
            </div>
          </div>
          <div className={styles.blockButtonBlock}>
            <div className={styles.buttonBlockContent}>
              <div className={styles.buttonBlockWrapper}>
                <Button themeLink sizeDefault buttonIcon={DotLarge}>
                  Text here
                </Button>
                <Button themeLink sizeDefault>
                  Text here
                </Button>
                <Button themeLink sizeDefault iconOnly buttonIcon={DotLarge} />
              </div>
              <div className={styles.buttonBlockWrapper}>
                <Button themeLink sizeSmall buttonIcon={DotLarge}>
                  Text here
                </Button>
                <Button themeLink sizeSmall>
                  Text here
                </Button>
                <Button themeLink sizeSmall iconOnly buttonIcon={DotLarge} />
              </div>
            </div>
          </div>
          <div className={styles.blockButtonBlock}>
            <div className={styles.buttonBlockContent}>
              <div className={styles.buttonBlockWrapper}>
                <Button themeText sizeDefault buttonIcon={DotLarge}>
                  Text here
                </Button>
                <Button themeText sizeDefault>
                  Text here
                </Button>
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
            <Dropdown isCheckboxRadioDropdown>
              <Checkbox id="checkbox_new" labelValue="Новый" />
              <Checkbox id="checkbox_calc" labelValue="Рассчет" />
              <Checkbox
                id="checkbox_approved"
                labelValue="Подтвержден"
                isCheckboxChecked
              />
              <Checkbox id="checkbox_delayed" labelValue="Отложен" />
              <Checkbox id="checkbox_completed" labelValue="Выполнен" />
              <Checkbox id="checkbox_canceled" labelValue="Отменен" />
            </Dropdown>
            <Dropdown isCheckboxRadioDropdown>
              <Radio
                id="radio_new"
                name="radio-dropdown"
                labelValue="Новый"
                noIco
              />
              <Radio
                id="radio_calc"
                name="radio-dropdown"
                labelValue="Рассчет"
                noIco
              />
              <Radio
                id="radio_approved"
                name="radio-dropdown"
                labelValue="Подтвержден"
                isRadioChecked
                noIco
              />
              <Radio
                id="radio_delayed"
                name="radio-dropdown"
                labelValue="Отложен"
                noIco
              />
              <Radio
                id="radio_completed"
                name="radio-dropdown"
                labelValue="Выполнен"
                noIco
              />
              <Radio
                id="radio_canceled"
                name="radio-dropdown"
                labelValue="Отменен"
                noIco
              />
            </Dropdown>
          </div>
          <div className={styles.dropdownWrapper}>
            <Dropdown dropdownTitle="Номер страницы">
              <Input placeholder="Введите номер" hasXButton={false} />
            </Dropdown>
            <Dropdown dropdownTitle="Удалить n записей?">
              <Button themeLink sizeSmall isFullWidth>
                Удалить
              </Button>
              <Button themeBlue sizeSmall isFullWidth>
                Отмена
              </Button>
            </Dropdown>
            <Dropdown dropdownTitle="Выберите тему">
              <Button themeLink sizeSmall isFullWidth buttonIcon={Sun}>
                Светлая
              </Button>
              <Button themeBlue sizeSmall isFullWidth buttonIcon={Moon}>
                Темная
              </Button>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};
