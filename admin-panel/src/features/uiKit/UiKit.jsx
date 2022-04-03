import cx from "classnames";
import styles from "./UiKit.module.css";
import { Input, SearchBar, Checkbox, Radio, Button, Dropdown } from "../../common/components/components";

export const UiKit = ({
    children,
    className,
    ...props
  }) => {

  return (
    <div className={styles.uiKit}>
        <div className={styles.uiKitBlock}>
            <div className={styles.blockTitle}>Input</div>
            <div className={styles.blockContent}>
                <Input />
            </div>
        </div>  
        <div className={cx(styles.uiKitBlock, styles.uiKitBlockSearchbar)}>
            <div className={styles.blockTitle}>SearchBar</div>
            <div className={styles.blockContent}>
                <SearchBar />
            </div>
        </div> 
        <div className={cx(styles.uiKitBlock, styles.uiKitBlockSizeSmall)}>
            <div className={styles.blockTitle}>Checkbox</div>
            <div className={cx(styles.blockContent, styles.blockContentCheckboxRadio)}>
                <Checkbox />
            </div>
        </div>   
        <div className={cx(styles.uiKitBlock, styles.uiKitBlockSizeSmall)}>
            <div className={styles.blockTitle}>Radio</div>
            <div className={cx(styles.blockContent, styles.blockContentCheckboxRadio)}>
                <Radio />
            </div>
        </div> 
        <div className={cx(styles.uiKitBlock, styles.uiKitBlockButtonBlock)}>
            <div className={styles.blockTitle}>Button</div>
            <div className={cx(styles.blockContent, styles.blockContentButtonBlock)}>
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
}

