import { MainMenu } from "../MainMenu/MainMenu";
import { Logo } from "../Logo/Logo";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { IconMenu } from "../IconMenu/IconMenu";

import styles from "./TopBar.module.css";

export function TopBar() {
  return (
    <div className={styles.topBarWrapper}>
      <MainMenu />
      <Logo />
      <div className={styles.iconWrapper}>
        <CurrencySelector />
        <IconMenu />
      </div>
    </div>
  );
}
