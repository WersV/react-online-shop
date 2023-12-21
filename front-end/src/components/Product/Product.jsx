import styles from "./Product.module.css";

import ITEM_ICON from "../../assets/item.png";
import HEART_ICON from "../../assets/heart.svg";

export function Product({ itemName, price }) {
  return (
    <div className={styles.wrapper}>
      <img src={ITEM_ICON} alt="item image" />
      <img className={styles.heart} src={HEART_ICON} alt="heart icon" />
      <div className={styles.productInfo}>
        <h3>{itemName}</h3>
        <span>{price}</span>
      </div>
    </div>
  );
}
