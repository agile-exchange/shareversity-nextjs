import styles from "../page.module.css";
import supabase from "../../utils/supabase";
export const revalidate = 0; // revalidates on every request
import { Link } from "next/link";
// import "server-only";
import { Suspense } from "react";

// Fetches data on each request
async function getData() {
  // add error handling later
  // here we are getting all the data from the posts table
  const { data } = await supabase.from("posts").select("*");
  return { data };
}

// ! data should not be any, need to figure out the best way to declare it, line 15
export default async function Feed() {
  const { data } = await getData();
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="/">Job Opportunities</a>
        </h1>
        <Suspense fallback={<p>Loading</p>}>
          <div className={styles.grid}>
            {data.map((post) => (
              <div className={styles.grid}>
                {/* // feed posts are displayed here  */}
                <a href={`/feed/${post.id}`}>
                  <div className={styles.card}>
                    <h1 className="card-title">{post.jobName}</h1>
                    <h2>{post.institution}</h2>
                    <h3>
                      {post.isRemote} in {post.location}
                    </h3>
                    <p className="card-description"> {post.description}</p>
                    <p className="card-headline"> {post.headline}</p>
                    <p className="card-headline">
                      {post.created_by ? "Created by: " + post.created_by : ""}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </Suspense>
      </main>
    </>
  );
}
