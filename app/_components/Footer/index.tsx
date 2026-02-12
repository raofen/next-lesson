// Footer
import styles from "./index.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <nav className={styles.nav}>
          <ul className={styles.items}>
            <li className={styles.imte}>
              <a href="/news">ニュース</a>
            </li>
            <li className={styles.imte}>
              <a href="/members">メンバー</a>
            </li>
            <li className={styles.imte}>
              <a href="/contact">お問い合わせ</a>
            </li>
          </ul>
        </nav>
        <p className={styles.cr}>(c) SIMPLE. All Rights Reserved 2026</p>
      </footer>
    </>
  );
}
