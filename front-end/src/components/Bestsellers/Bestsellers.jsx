import styles from "./Bestsellers.module.css";

export function Bestsellers({ children }) {
  return (
    <div className={styles.wrapper}>
      <h2>Sprawdź nasze bestsellery</h2>
      {children}
    </div>
  );
}
