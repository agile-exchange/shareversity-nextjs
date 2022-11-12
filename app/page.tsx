import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='/'>Shareversity</a>
        </h1>

        <p className={styles.description}>let's get started!</p>

        <div className={styles.grid}>
          <a href="/posts" className={styles.card}>
            <h2>Create a post &rarr;</h2>
            {/* <p>Find in-depth information about Next.js 13</p> */}
          </a>

          <a href="feed" className={styles.card}>
            <h2>View posts &rarr;</h2>
            {/* <p>Explore the Next.js 13 playground.</p> */}
          </a>

          {/* <a
            href="/feed"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Sign in &rarr;</h2>
             <p>Deploy your Next.js site to a public URL with Vercel.</p> 
          </a> */}
          
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
