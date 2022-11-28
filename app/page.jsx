import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">Shareversity</a>
        </h1>

        <p className={styles.description}>"Seamlessly Connecting Students with Opportunities"</p>
        <p className={styles.description}>Search Now!</p>
      </main>
    </div>
  );
}
