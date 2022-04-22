import styles from "./Header.module.css";
import { Button } from "../../../../common/components";
import { Sun } from "../../../../icons";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerTitle}>Список заказов</div>
      <Button theme="link" buttonIcon={Sun}>
        Светлая тема
      </Button>
    </div>
  );
};
