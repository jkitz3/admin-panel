import { useState } from "react";
import cx from 'classnames';
import styles from './Input.module.css';

export const Input = ({
    children,
    className,
    value,
    onChange,
    isInputBlank,
    isInputIncorrect = true,
    isInputDisabled = true,
    ...props
}) => { 
    const [inputEmpty, setInputEmpty] = useState('');
    const [inputIncorrect, setInputIncorrect] = useState('06.12.2021');

    const handleInputEmpty = ({target: {value}}) => {
      setInputEmpty(value);
    }

    const handleInputIncorrect = ({target: {value}}) => {
      setInputIncorrect(value);
    }

    const clearInput = () => {
      setInputIncorrect('');
    }
        
    return (
      <div className={cx(styles.uiKitBlock, styles.uiKitBlockInput)}> 
      <div className={styles.blockTitle}>Input</div>
      <div className={styles.blockContent}>
        <div className={styles.blockOrderDate}>
          <label className={styles.orderDateTitle} htmlFor="orderDateBlank">
            Дата и время заказа
          </label>
          <div className={styles.orderDateContent}>
            <input
              className={cx(styles.input, styles.orderDateInput)}
              placeholder="Введите"
              type="text"
              id="orderDateBlank"
              value={inputEmpty}
              onChange={handleInputEmpty}
            />
          </div>
        </div>
        <div className={styles.blockOrderDate}>
          <label className={styles.orderDateTitle} htmlFor="orderDateIncorrect">
            Дата и время заказа
          </label>
          <div className={styles.orderDateContent}>
            <input
              className={cx(styles.input, styles.orderDateInput, styles.orderDateInputIncorrect)}
              placeholder="Введите"
              type="text"
              id="orderDateIncorrect"
              value={inputIncorrect}
              onChange={handleInputIncorrect}
            />
            <button className={cx(styles.button, styles.buttonXButton)} onClick={clearInput}></button>
          </div>
        </div>
        <div className={styles.blockOrderDate}>
          <p className={styles.orderDateTitle}>Дата и время заказа</p>
          <div className={styles.orderDateContent}>
            <input
              className={cx(styles.input, styles.orderDateInput, styles.orderDateInputDisabled)}
              placeholder="Введите"
              type="text"
              defaultValue="06.12.2021"
            />
            <div className={styles.orderDateIconDisabled}></div>
          </div>
        </div>
      </div>
    </div>
    );
};
