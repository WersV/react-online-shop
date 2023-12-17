import { Footer } from "../Footer/Footer";
import styles from "./Layout.module.css";

export function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <Footer />
    </div>
  );
}
