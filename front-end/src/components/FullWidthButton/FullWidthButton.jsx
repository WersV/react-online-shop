import styles from "./FullWidthButton.module.css";

export function FullWidthButton({ children, btnType }) {
  return (
    <button
      className={`${styles.wrapper} ${btnType === "summary" && styles.summary}`}
    >
      <span>{children}</span>
    </button>
  );
}
