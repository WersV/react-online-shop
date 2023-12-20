import styles from "./Promo.module.css";

export function Promo({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <h2>Letnie promocje do -70%!</h2>
        <p>Tylko najlepsze okazje!</p>
        {children}
      </div>
    </div>
  );
}
