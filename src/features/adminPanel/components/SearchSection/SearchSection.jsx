import styles from "./SearchSection.module.css";
import { Button, Input } from "../../../../common/components";
import { Search, Filter, Refresh } from "../../../../icons";

export const SearchSection = ({
  name,
  value,
  onChange,
  onReset,
  toggleFilter,
  ...props
}) => {
  return (
    <div className={styles.searchbar}>
      <div className={styles.searchbarItemGroup}>
        <div className={styles.itemGroupInput}>
          <Input
            id="searchBar"
            placeholder="Номер заказа или ФИО"
            inputIcon={Search}
            value={value}
            name={name}
            onChange={onChange}
            onReset={onReset}
            {...props}
          />
        </div>
        <div className={styles.itemGroupFilterHandler}>
          <Button buttonIcon={Filter} onClick={toggleFilter}>
            Фильтры
          </Button>
          <Button theme="link">Сбросить фильтры</Button>
        </div>
      </div>
      <div className={styles.searchbarContentHandler}>
        <Button theme="link" buttonIcon={Refresh}>
          Загрузка
        </Button>
      </div>
    </div>
  );
};
