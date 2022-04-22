import styles from "./TableHeader.module.css";
import { Button } from "../../../../../common/components/Button/Button";
import { Checkbox } from "../../../../../common/components/Checkbox/Checkbox";

export const TableHeader = ({ className, ...props }) => {
  return (
    <div className={styles.orderListHeader}>
      <ul className={styles.header}>
        <li className={styles.choice}>
          <Checkbox id="select_all_checkbox" />
        </li>
        <li className={styles.orderId}>
          <Button theme="link" className={styles.headerButton}>
            #
          </Button>
        </li>
        <li className={styles.orderDate}>
          <Button theme="link" className={styles.headerButton}>
            Дата
          </Button>
        </li>
        <li className={styles.orderStatus}>
          <Button theme="link" className={styles.headerButton}>
            Статус
          </Button>
        </li>
        <li className={styles.orderPositionCount}>
          <Button theme="link" className={styles.headerButton}>
            Позиций
          </Button>
        </li>
        <li className={styles.orderAmount}>
          <Button theme="link" className={styles.headerButton}>
            Сумма
          </Button>
        </li>
        <li className={styles.customerName}>
          <Button theme="link" className={styles.headerButton}>
            ФИО покупателя
          </Button>
        </li>
      </ul>
    </div>
  );
};
