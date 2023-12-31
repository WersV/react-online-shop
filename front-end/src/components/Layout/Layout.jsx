import { Footer } from "../Footer/Footer";
import { CategoriesMenu } from "../CategoriesMenu/CategoriesMenu";
import { TopBar } from "../TopBar/TopBar";

import styles from "./Layout.module.css";
import { MainContent } from "../../views/MainContent/MainContent";
import { Favorites } from "../../views/Favorites/Favorites";
import { Cart } from "../../views/Cart/Cart.jsx";
import { ProductsList } from "../../views/ProductsList/ProductsList.jsx";

export function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <TopBar />
      <CategoriesMenu />
      {/* <MainContent /> */}
      {/* <Favorites /> */}
      {/* <Cart /> */}
      <ProductsList />
      <Footer />
    </div>
  );
}
