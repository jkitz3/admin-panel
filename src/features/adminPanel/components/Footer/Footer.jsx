// import cx from "classnames";
import styles from "./Footer.module.css";
import { Button } from "../../../../common/components";
import { Bin, Pencil } from "../../../../icons";

export const Footer = ({ className, ...props }) => {
  // const inputClassNames = cx(styles.input, {
  //   [styles.inputDisabled]: disabled,
  // });

  return (
    <div className={styles.footer}>
      <div className={styles.footerHandlers}>
        <span className={styles.choiceCount}>{`Выбрано записей: ${0}`}</span>
        <Button size="small" isFullWidth buttonIcon={Pencil}>
          Изменить статус
        </Button>
        <Button
          className={styles.redButton}
          size="small"
          isFullWidth
          buttonIcon={Bin}
        >
          Удалить
        </Button>
      </div>
      <div className={styles.pagination}>
        <Button size="small">1</Button>
        <Button size="small" theme="link">
          2
        </Button>
        <Button size="small" theme="link">
          3
        </Button>
        <Button size="small" theme="link">
          ...
        </Button>
        <Button size="small" theme="link">
          18
        </Button>
        <Button size="small" theme="link">
          #
        </Button>
      </div>
    </div>
  );
};
