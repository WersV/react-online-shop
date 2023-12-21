import styles from "./FullWidthButton.module.css";

export function FullWidthButton({ children }) {
  return (
    <button className={styles.wrapper}>
      <span>{children}</span>
    </button>
  );
}
