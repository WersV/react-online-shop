import { NavLink } from "react-router-dom";
import styles from "./MainMenu.module.css";
import { GENDERS } from "../../constants/categoires";

export function MainMenu() {
  return (
    <ul className={styles.mainMenuWrapper}>
      {GENDERS.map((gender) => {
        return (
          <li key={gender.path} className={styles.list}>
            <NavLink to={gender.path}>{gender.name}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}
