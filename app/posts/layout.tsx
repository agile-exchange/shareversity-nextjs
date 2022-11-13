import "../globals.css";
import styles from "../page.module.css";
export default function FeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <a className={styles.navitem} href="/">
        Home
      </a>
      |
      <a className={styles.navitem} href="/feed">
        Feed
      </a>
      {children}
    </section>
  );
}
