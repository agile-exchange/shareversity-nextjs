import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">Shareversity</a>
        </h1>

        <p className={styles.description}>let's get started!</p>

        <div className={styles.grid}>
          <a href="/posts" className={styles.card}>
            <h2>Create a post &rarr;</h2>
          </a>

          <a href="feed" className={styles.card}>
            <h2>View posts &rarr;</h2>
          </a>
        </div>
      </main>
    </div>
  );
}
