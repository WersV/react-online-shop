import styles from "./ExpandableMenu.module.css";

export function ExpandableMenu() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.h3}>Kobieta</h3>
      <ul>
        <li>
          Odzież
          <ul>
            <li>Koszulki</li>
            <li>Swetry</li>
            <li>Spodnie</li>
          </ul>
        </li>
        <li>Obuwie</li>
        <li>Akcesoria</li>
        <li>Sport</li>
      </ul>
    </div>
  );
}
