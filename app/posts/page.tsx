"use client";
import styles from "../page.module.css";
import Form from "./form";

export default function posts() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="/posts">Create a post </a>
        </h1>
        <Form />
      </main>
    </>
  );
}
