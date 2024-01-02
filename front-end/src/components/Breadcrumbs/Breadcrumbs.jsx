import styles from "./Breadcrumbs.module.css";

export function Breadcrumbs() {
  return (
    <ul className={styles.ulWrapper}>
      <li>Kobieta</li>
      <li>Odzież</li>
      <li className={styles.active}>Swetry</li>
    </ul>
  );
}
