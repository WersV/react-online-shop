import { NavLink } from "react-router-dom";

import styles from "./ExpandableMenu.module.css";

import ARROW_UP from "../../assets/arrowUp.svg";
import ARROW_DOWN from "../../assets/arrowDown.svg";
import { CATEGORIES } from "../../constants/categoires";

export function ExpandableMenu() {
  const activePath = "odziez";

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.h3}>Kobieta</h3>
      <ul className={styles.outerUl}>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.path}>
              <NavLink to={category.path}>
                {({ isActive }) => {
                  return (
                    <>
                      <div className={styles.liDiv}>
                        {category.name}
                        <img
                          src={
                            activePath === category.path ? ARROW_UP : ARROW_DOWN
                          }
                          alt="arrow up"
                        />
                      </div>
                    </>
                  );
                }}
              </NavLink>
              {activePath === category.path && (
                <ul className={`${styles.innerUl}`}>
                  {category.subcategories.map((element) => {
                    return (
                      <li key={element.path}>
                        <NavLink to={element.path}>
                          {element.categoryName}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
