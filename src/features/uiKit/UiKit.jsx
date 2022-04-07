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
import { SvgSearch } from "../../common/iconComponents";

export const UiKit = () => {
  return (
    <div className={styles.uiKit}>
      <div className={styles.uiKitBlock}>
        <div className={styles.blockTitle}>Input</div>
        <div className={styles.blockContent}>
          <Label labelValue="Дата и время заказа" htmlFor="orderDateBlank" />
          <Input id="orderDateBlank" type="text" value="" placeholder="Введите" hasLabel/>
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
          <Input id="orderDateDisabled" type="text" value="06.12.2021" disabled hasLabel/>
        </div>
      </div>
      <div className={cx(styles.uiKitBlock, styles.uiKitBlockSearchbar)}>
        <div className={styles.blockTitle}>SearchBar</div>
        <div className={styles.blockContent}>
          <Input id="searchBar" type="text" value="" placeholder="Номер заказа или ФИО" inputIcon={SvgSearch} />
          <Input id="searchBar" type="text" value="50744" placeholder="Номер заказа или ФИО" inputIcon={SvgSearch} />
        </div>
      </div>
      <div className={cx(styles.uiKitBlock, styles.uiKitBlockSizeSmall)}>
        <div className={styles.blockTitle}>Checkbox</div>
        <div
          className={cx(styles.blockContent, styles.blockContentCheckboxRadio)}
        >
          <Checkbox />
        </div>
      </div>
      <div className={cx(styles.uiKitBlock, styles.uiKitBlockSizeSmall)}>
        <div className={styles.blockTitle}>Radio</div>
        <div
          className={cx(styles.blockContent, styles.blockContentCheckboxRadio)}
        >
          <Radio />
        </div>
      </div>
      <div className={cx(styles.uiKitBlock, styles.uiKitBlockButtonBlock)}>
        <div className={styles.blockTitle}>Button</div>
        <div
          className={cx(styles.blockContent, styles.blockContentButtonBlock)}
        >
          <Button />
        </div>
      </div>
      <div className={cx(styles.uiKitBlock, styles.uiKitBlockDropdown)}>
        <div className={styles.blockTitle}>Dropdown</div>
        <div className={styles.blockContent}>
          <Dropdown />
        </div>
      </div>
    </div>
  );
};
