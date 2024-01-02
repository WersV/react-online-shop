import { Link } from "react-router-dom";

import styles from "./Product.module.css";

import HEART_ICON from "../../assets/heart.svg";

export function Product({ product }) {
  return (
    <Link>
      <div className={styles.wrapper}>
        <img src={product.photos[0]} alt="item image" />
        <img className={styles.heart} src={HEART_ICON} alt="heart icon" />
        <div className={styles.productInfo}>
          <h3>{product.productName}</h3>
          <span>{product.pricePLN}zł</span>
        </div>
      </div>
    </Link>
  );
}
