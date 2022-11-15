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
          <a href="/">Feed</a>
        </h1>
        <div className={styles.grid}>
          {data.map((post: any) => (
         
            <div className={styles.grid}>
              <div className={styles.card}>
                <h1>{post.jobName} </h1>
                <p>{post.category}</p>
                <p className={styles.description}>{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

            //         jobName: inputs.jobName,
            //         description: inputs.description,
            //         category: inputs.category,
            //         field: inputs.field,
            //         academicLevel: inputs.academicLevel,
            //         location: inputs.location,