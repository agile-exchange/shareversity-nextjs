import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">Shareversity</a>
        </h1>

        <p className={styles.description}>let's get started!</p>
      </main>
    </div>
  );
}
