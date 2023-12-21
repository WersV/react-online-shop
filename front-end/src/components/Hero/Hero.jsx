import styles from "./Hero.module.css";

export function Hero({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
