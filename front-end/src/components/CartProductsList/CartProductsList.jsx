import styles from "./CartProductsList.module.css";

export function CartProductsList({ children }) {
  return (
    <div className={styles.wrapper}>
      <h2>Koszyk</h2>
      {children}
    </div>
  );
}
