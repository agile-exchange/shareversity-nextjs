'use client'
import Link from "next/link";
import "./globals.css";
import styles from "./page.module.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  
}) {
 

  return (
    <html>
      <body>
        <div className={styles.navbar}>
          <Link className={styles.navitem} href="/">
            Home
          </Link>
          <Link className={styles.navitem} href="/posts">
            Create Post
          </Link>
          <Link className={styles.navitem} href="/feed">
            Feed
          </Link>
          <Link className={styles.login} href="/">
            Login
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}


