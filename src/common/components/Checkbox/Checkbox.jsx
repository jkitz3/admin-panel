import styles from "./Checkbox.module.css";

export const Checkbox = ({
  id,
  labelValue,
  checked = false,
  onChange = () => {},
}) => {
  return (
    <div className={styles.checkbox}>
      <div className={styles.checkboxContent}>
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={styles.checkboxInput}
        />
        <label className={styles.checkboxLabel} htmlFor={id}>
          {labelValue}
        </label>
      </div>
    </div>
  );
};
