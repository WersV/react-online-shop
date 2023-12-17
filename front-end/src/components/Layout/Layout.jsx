import { Footer } from "../Footer/Footer";
import { CategoriesMenu } from "../CategoriesMenu/CategoriesMenu";
import { TopBar } from "../TopBar/TopBar";

import styles from "./Layout.module.css";

export function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <TopBar />
      <CategoriesMenu />
      <Footer />
    </div>
  );
}
