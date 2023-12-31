import styles from "./FlexContainer.module.css";

export function FlexContainer({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
