import styles from "./IconMenu.module.css";
import BAG_ICON from "../../assets/bag.svg";
import HEART_ICON from "../../assets/heart.svg";

export function IconMenu() {
  return (
    <div className={styles.iconWrapper}>
      <div className={styles.heart}>
        <img src={HEART_ICON} alt="heart icon" />
      </div>

      <div className={styles.bag}>
        <img src={BAG_ICON} alt="bag icon" />
        <div className={styles.itemsNumber}>0</div>
      </div>
    </div>
  );
}
