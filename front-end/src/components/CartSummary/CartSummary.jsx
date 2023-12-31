import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import styles from "./CartSummary.module.css";

import CAR_ICON from "../../assets/car.svg";

export function CartSummary({ cartItems }) {
  const shipmentPrice = 49;
  let totalPrice = 0;

  const productsPrice = cartItems.reduce((acc, currVal) => {
    return acc.pricePLN + currVal.pricePLN;
  });

  if (productsPrice < 500) {
    totalPrice += productsPrice + shipmentPrice;
  } else {
    totalPrice = productsPrice;
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.h2}>Podsumowanie</h2>
      <hr />
      <div className={styles.summary}>
        <div className={styles.summaryLine}>
          <p>Wartość produktów</p>
          <span>{productsPrice}zł</span>
        </div>
        <div className={styles.summaryLine}>
          <p>Koszt dostawy</p>
          <span>{productsPrice < 500 ? shipmentPrice : 0}zł</span>
        </div>
        <div className={styles.summaryLine}>
          <p>Do zapłaty</p>
          <span>{totalPrice}zł</span>
        </div>
        <FullWidthButton btnType="summary">Do kasy</FullWidthButton>
      </div>
      <div className={styles.freeShipment}>
        <img src={CAR_ICON} alt="car icon" />
        <p>Darmowa dostawa od 500zł</p>
      </div>
    </div>
  );
}
