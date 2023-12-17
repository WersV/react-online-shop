import { Footer } from "../Footer/Footer";
import { MainContent } from "../MainContent/MainContent";
import { CategoriesMenu } from "../CategoriesMenu/CategoriesMenu";

import styles from "./Layout.module.css";

export function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <MainContent />
      <CategoriesMenu />
      <Footer />
    </div>
  );
}
