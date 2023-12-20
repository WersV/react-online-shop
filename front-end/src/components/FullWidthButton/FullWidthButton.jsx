import styles from "./FullWidthButton.module.css";

export function FullWidthButton({ children }) {
  return (
    <div className={styles.wrapper}>
      <span>{children}</span>
    </div>
  );
}
