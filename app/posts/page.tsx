'use client'
import styles from "../page.module.css";

import Form from "./form";
export default function posts() {
  return (
    <>
      <main className={styles.main}>
        <h1>Create Post</h1>

        <Form></Form>
      </main>
    </>
  );
}
