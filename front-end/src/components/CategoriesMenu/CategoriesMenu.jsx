import styles from "./CategoriesMenu.module.css";
import { CATEGORIES } from "../../constants/categoires";
import { NavLink } from "react-router-dom";
export function CategoriesMenu() {
  return (
    <div className={styles.categoriesWrapper}>
      <ul className={styles.menu}>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.path}>
              <NavLink to={category.path}>{category.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
