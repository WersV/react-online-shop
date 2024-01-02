import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { Pagination } from "../../components/Pagination/Pagination";
import { Products } from "../../components/Products/Products";

import styles from "./ProductsList.module.css";

export function ProductsList() {
  return (
    <div className={styles.wrapper}>
      <ExpandableMenu />
      <div className={styles.mainContent}>
        <Breadcrumbs />
        <Products>
          <Pagination />
        </Products>
      </div>
    </div>
  );
}
