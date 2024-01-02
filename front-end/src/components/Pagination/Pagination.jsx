import styles from "./Pagination.module.css";

export function Pagination() {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.ul}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>
  );
}
