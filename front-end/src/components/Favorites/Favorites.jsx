import { FavoriteProduct } from "../FavoriteProduct/FavoriteProduct";
import { FavoritesList } from "../FavoritesList/FavoritesList";

import styles from "./Favorites.module.css";

export function Favorites() {
  return (
    <div className={styles.wrapper}>
      <FavoritesList>
        <FavoriteProduct heading="Biały sweter" price="199zł" />
        <FavoriteProduct heading="Biały sweter" price="199zł" />
      </FavoritesList>
    </div>
  );
}
