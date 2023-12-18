import { Footer } from "../Footer/Footer";
import { CategoriesMenu } from "../CategoriesMenu/CategoriesMenu";
import { TopBar } from "../TopBar/TopBar";

import styles from "./Layout.module.css";
import { MainContent } from "../MainContent/MainContent";

export function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <TopBar />
      <CategoriesMenu />
      <MainContent />
      <Footer />
    </div>
  );
}
