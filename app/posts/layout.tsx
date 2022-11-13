import "../globals.css";
import styles from "../page.module.css";
export default function FeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={styles.navbar}>
      <a href="/">Home</a> | 
      
      <a href="/feed">Feed</a>
      {children}
    </section>
  );
}


