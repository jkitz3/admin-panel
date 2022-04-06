import styles from "./Label.module.css";

export const Label = ({ labelValue, htmlFor }) => {
  return (
    <label className={styles.orderDateTitle} htmlFor={htmlFor}>
      {labelValue}
    </label>
  );
};
