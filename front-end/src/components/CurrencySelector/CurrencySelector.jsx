import styles from "./CurrencySelector.module.css";
import { CURRENCIES } from "../../constants/currencies";

export function CurrencySelector() {
  return (
    <select id="currency-select" className={styles.select}>
      <option value={CURRENCIES.PLN} defaultValue>
        {CURRENCIES.PLN}
      </option>
      <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
      <option value={CURRENCIES.EUR}>{CURRENCIES.EUR}</option>
    </select>
  );
}
