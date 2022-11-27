"use client";
export const revalidate = 0;
export const dynamic = "force-dynamic";
import styles from "../page.module.css";
import Form from "./form";
import supabase from "../../utils/supabase-browser";
import { useState, useEffect } from "react";
import { Suspense } from "react";


export default function posts() {
  const [profile, setProfile] = useState(null);


  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const {
      data: { user, session }} = await supabase.auth.refreshSession();
    const { data, error } = await supabase.auth.getUser();
    // console.log('the error');

    if (data.user) {
      setProfile(data);
    }
  };

  if (profile == null) {
    console.log("profile", profile);
    console.log("its null");

    return (
      <>
        <Suspense fallback={<p>Loading form...</p>}>
          <main className={styles.main}>
            <p>Not logged in</p>
            <p>Please login to post</p>
          </main>
        </Suspense>
      </>
    );
  }

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="/posts">Create a post </a>
        </h1>

        {supabase.auth.getUser() ? (
          <Form />
        ) : (
          <p className={styles.description}>
            You must be logged in to create a post
          </p>
        )}
      </main>
    </>
  );
}
