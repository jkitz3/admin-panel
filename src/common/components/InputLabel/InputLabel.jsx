import styles from "./InputLabel.module.css";

export const InputLabel = ({ children, htmlFor }) => {
  return (
    <label className={styles.inputLabel} htmlFor={htmlFor}>
      {children}
    </label>
  );
};
