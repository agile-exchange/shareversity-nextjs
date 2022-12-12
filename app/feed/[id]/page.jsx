// "use client"
// import { useRouter } from "next/router";
import styles from "../../page.module.css";
import supabase from "../../../utils/supabase";
import { Suspense } from "react";
import Apply from "../../apply/page";
import ApplyJob from "../../../components/ApplyJob";



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
      <Suspense fallback={<p>Loading...</p>}>
        <div className={styles.grid}>
          {data.map((post) => (
            <div className={styles.grid}>
              {/* // feed posts are displayed here  */}
              <div>
              <br />
              <a href={post.application_link}>
                   <button className="viewJob"> Apply </button>
              </a>
              <br />
              <br />
              <a href={`/apply/${post.created_by}`}>
                    <button class="button"> Share Profile </button>
              </a>
              </div>
              <br/>
             
              <div id={post.id} className={styles.cardDetails}>
                <h1 className="card-title">{post.jobName}</h1>
                <h2>{post.institution}</h2>
                <h3>
                  {post.workPlaceType} in {post.location}
                </h3>
                <hr class="new1"></hr>
                <h3>Profile Insights</h3>
                <p> {post.skills}</p>
                <hr class="new1"></hr>
                <h3>Full Job Description</h3>
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
