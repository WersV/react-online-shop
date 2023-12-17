import styles from "./CurrencySelector.module.css";

export function CurrencySelector() {
  return (
    <select id="currency-select" className={styles.select}>
      <option value="PLN" defaultValue>
        PLN
      </option>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
    </select>
  );
}
