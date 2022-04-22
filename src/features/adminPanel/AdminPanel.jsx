import styles from "./AdminPanel.module.css";
import {
  FilterContainer,
  FooterContainer,
  HeaderContainer,
  OrderListContainer,
  OrderListHeaderContainer,
  SearchContainer,
} from "../../containers";

export const AdminPanel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperHeader}>
        <HeaderContainer />
      </div>
      <div className={styles.wrapperSearchbarAndFilter}>
        <div className={styles.wrapperSearchbar}>
          <SearchContainer />
        </div>
        <div className={styles.wrapperFilter}>
          <FilterContainer />
        </div>
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
