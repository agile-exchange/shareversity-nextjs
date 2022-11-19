import styles from "../page.module.css";
import supabase from "../../utils/supabase";
export const revalidate = 0; // revalidates on every request
import "server-only";

// Fetches data on each request
async function getData() {
  // add error handling later
  // here we are getting all the data from the posts table
  const { data } = await supabase.from("posts").select("*");
  return { data };
}

// ! data should not be any, need to figure out the best way to declare it, line 15
export default async function Feed() {
  const { data }: any = await getData();
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="/">Job Opportunities</a>
        </h1>
        <div className={styles.grid}>
          {data.map((post: any) => (
            <div className={styles.grid}>
              {/* // feed posts are displayed here  */}
              <div className={styles.card}>
                <h1 className="card-title">{post.jobName}</h1>
                <h2>{post.institution}</h2>
                <h3>{post.isRemote} in {post.location}</h3> 
                <p className="card-description"> {post.description}</p>
                <p className="card-headline"> {post.headline}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}