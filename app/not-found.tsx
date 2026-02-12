// not-found.tsx
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <dl>
        <dt className={styles.title}>ページが見つかりませんでした(´・ω・`)</dt>
        <dd className={styles.text}>
          あなたがアクセスしようとしたページは存在しないお(´・ω・`)
          <br />
          URLを再度ご確認ください。
        </dd>
      </dl>
    </div>
  );
}
