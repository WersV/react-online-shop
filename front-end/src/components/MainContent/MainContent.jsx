import { TopBar } from "../TopBar/TopBar";
import { MainMenu } from "../MainMenu/MainMenu";
import { Logo } from "../Logo/Logo";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { IconMenu } from "../IconMenu/IconMenu";

export function MainContent() {
  return (
    <>
      <p>MainContent</p>
      <TopBar />
      <MainMenu />
      <Logo />
      <CurrencySelector />
      <IconMenu />
    </>
  );
}
