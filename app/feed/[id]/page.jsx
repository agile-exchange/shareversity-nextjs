// "use client"
// import { useRouter } from "next/router";
import styles from "../../page.module.css";
import supabase from "../../../utils/supabase";
import { Suspense } from "react";
import {Link} from "next/link";
// const router = useRouter();
// const { id } = router.query;

async function getData(id) {
  // add error handling later
  // here we are getting all the data from the posts table
  const { data } = await supabase.from("posts").select("*").eq("id", id);
  return { data };
}
export default async function Post({params}) {
    const { data } = await getData(params.id);
    
  return (
    <>
      <h1>Individual {params.id} </h1>
      <Suspense fallback={<p>Loading...</p>}>
        <div className={styles.grid}>
          {data.map((post) => (
            <div className={styles.grid}>
              {/* // feed posts are displayed here  */}
              <div id={post.id} className={styles.card}>
                <h1 className="card-title">{post.jobName}</h1>
                <h2>{post.institution}</h2>
                <h3>
                  {post.isRemote} in {post.location}
                </h3>
                <p className="card-description"> {post.description}</p>
                <p className="card-headline"> {post.headline}</p>
                

              </div>
            </div>
          ))}
        </div>
      </Suspense>
    </>
  );
}
