import styles from "./AdminPanel.module.css";
import {
  FooterContainer,
  HeaderContainer,
  OrderListContainer,
  OrderListHeaderContainer,
  SearchAndFilterContainer,
} from "../../containers";

export const AdminPanel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperHeader}>
        <HeaderContainer />
      </div>
      <div className={styles.wrapperSearchbarAndFilter}>
        <SearchAndFilterContainer />
      </div>
      <div className={styles.wrapperOrderList}>
        <OrderListHeaderContainer />
        <OrderListContainer />
      </div>
      <div className={styles.wrapperFooter}>
        <FooterContainer />
      </div>
    </div>
  );
};
