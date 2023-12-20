import styles from "./MainContent.module.css";
import { Hero } from "../Hero/Hero";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import { Bestsellers } from "../Bestsellers/Bestsellers";
import { Product } from "../Product/Product";
import { Promo } from "../Promo/Promo";

export function MainContent() {
  return (
    <div className={styles.wrapper}>
      <Hero>
        <Promo>
          <FullWidthButton> Sprawdź produkty! </FullWidthButton>
        </Promo>
      </Hero>
      <Bestsellers>
        <Product />
      </Bestsellers>
    </div>
  );
}
