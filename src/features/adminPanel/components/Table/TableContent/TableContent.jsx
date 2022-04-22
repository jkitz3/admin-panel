import styles from "./TableContent.module.css";
import { Checkbox } from "../../../../../common/components";

export const TableContent = ({ orderList }) => {
  return orderList.map((order) => (
    <div key={order.id} className={styles.orderListContent}>
      <ul className={styles.content}>
        <li className={styles.choice}>
          <Checkbox id={`orderListCheckbox_${order.id}`} />
        </li>
        <li className={styles.orderId}>{order.id}</li>
        <li className={styles.orderDate}>{order.orderDate}</li>
        <li className={styles.orderStatus}>{order.orderStatus}</li>
        <li className={styles.orderPositionCount}>
          {order.positionCount ? order.positionCount : "-"}
        </li>
        <li className={styles.orderAmount}>
          {order.orderAmount ? `${order.orderAmount} ₽` : "-"}
        </li>
        <li className={styles.customerName}>{order.customerName}</li>
      </ul>
      <hr className={styles.hrLine}></hr>
    </div>
  ));
};
