// Footer
import Link from "next/link";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <nav className={styles.nav}>
          <ul className={styles.items}>
            <li className={styles.imte}>
              <Link href="/news">ニュース</Link>
            </li>
            <li className={styles.imte}>
              <Link href="/members">メンバー</Link>
            </li>
            <li className={styles.imte}>
              <Link href="/contact">お問い合わせ</Link>
            </li>
          </ul>
        </nav>
        <p className={styles.cr}>(c) SIMPLE. All Rights Reserved 2026</p>
      </footer>
    </>
  );
}
