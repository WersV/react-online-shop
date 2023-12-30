import styles from "./FavoriteProduct.module.css";
import PRODUCT_ICON from "../../assets/item.png";
import REMOVE_ICON from "../../assets/removeBtn.svg";
import SMALL_BAG_ICON from "../../assets/bagSmall.svg";

export function FavoriteProduct({ product }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.horizontalLine}></div>
      <img className={styles.img} src={product.photos[0]} alt="product image" />
      <div className={styles.details}>
        <h3>{product.productName}</h3>
        <p>
          Cena: <span>{product.pricePLN}zł</span>
        </p>
        <div className={styles.buttons}>
          <button>
            <img src={REMOVE_ICON} alt="remove icon" />
            <span>Usuń</span>
          </button>
          <button>
            <img src={SMALL_BAG_ICON} alt="remove icon" />
            <span>Dodaj do koszyka</span>
          </button>
        </div>
      </div>
      <div className={styles.price}>
        <span>{product.pricePLN}zł</span>
      </div>
    </div>
  );
}
