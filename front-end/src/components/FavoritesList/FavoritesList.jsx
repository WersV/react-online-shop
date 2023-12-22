import styles from "./FavoritesList.module.css";

export function FavoritesList({ children }) {
  return (
    <div className={styles.wrapper}>
      <h2>Ulubione</h2>
      {children}
    </div>
  );
}
