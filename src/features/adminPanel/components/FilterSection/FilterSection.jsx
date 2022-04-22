import styles from "./FilterSection.module.css";
import { Button, Input, InputLabel } from "../../../../common/components";

export const FilterSection = ({ className, ...props }) => {
  return (
    <div className={styles.filter}>
      <div className={styles.orderDate}>
        <InputLabel htmlFor="orderDateFrom" className={styles.inputLabel}>
          Дата оформления
        </InputLabel>
        <Input
          id="orderDateFrom"
          placeholder="dd.mm.dddd"
          className={styles.orderDateFrom}
        ></Input>
        <Input
          id="orderDateTo"
          placeholder="dd.mm.dddd"
          className={styles.orderDateTo}
        ></Input>
      </div>
      <div className={styles.orderStatus}>
        <InputLabel htmlFor="orderStatus" className={styles.inputLabel}>
          Статус заказа
        </InputLabel>
        <Input id="orderStatus" placeholder="Выберите"></Input>
      </div>
      <div className={styles.orderAmount}>
        <InputLabel htmlFor="orderAmountFrom" className={styles.inputLabel}>
          Сумма заказа
        </InputLabel>
        <Input
          id="orderAmountFrom"
          placeholder="₽"
          className={styles.orderAmountFrom}
        ></Input>
        <Input
          id="orderAmountTo"
          placeholder="₽"
          className={styles.orderAmountTo}
        ></Input>
      </div>
      <Button theme="link">Применить</Button>
    </div>
  );
};
