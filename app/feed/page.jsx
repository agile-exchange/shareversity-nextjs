"use client"
import styles from "../page.module.css";
import { useState, useEffect } from "react";
import supabase from "../../utils/supabase";
import Filters from "../../components/Filters";
export const revalidate = 0; // revalidates on every request
import { Link } from "next/link";
// import "server-only";
// import { Suspense } from "react";

// Fetches data on each request
async function getData() {
  // add error handling later
  // here we are getting all the data from the posts table
  const { data } = await supabase.from("posts").select("*");
  return { data };
}

// ! data should not be any, need to figure out the best way to declare it, line 15
export default function Feed() {
  const [data, setData] = useState(null);
  const [isDataDownloaded, setIsDataDownloaded] = useState(false);
  const [filters, setFilters] = useState({
    jobType:""
  });

  console.log("hi1");

  // useEffect(async () => {
  //   const { data } = await supabase.from("posts").select("*");
  //   console.log(JSON.stringify(data));
    
  // }, [])

  useEffect(() => {
    async function fetchData() {
      const { data } = await supabase.from("posts").select("*");
      // console.log(JSON.stringify(data));
      setIsDataDownloaded(true);
      setData(data);
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  const updateFilters = async (theFilters) => {
    console.log("filters: " + JSON.stringify(theFilters));
    let query = supabase.from('posts').select('*');

    if(theFilters.jobType && theFilters.jobType.length > 0) {
      query = query.eq('jobType', theFilters.jobType);
    } 
    if(theFilters.industry && theFilters.industry.length > 0) {
      query = query.eq('industry', theFilters.industry);
    } 
    if(theFilters.experience && theFilters.experience.length > 0) {
      query = query.eq('experience', theFilters.experience);
    } 
    const { data } = await query;
    setIsDataDownloaded(true);
    setData(data);
  }
  // const { data } = await getData();
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="/">Job Opportunities</a>
        </h1>
        <div> <Filters updateFilters={updateFilters}/> </div>
        <button onClick={updateFilters}>Filter</button>
        {!isDataDownloaded && <div>hi</div>}
        {/* <Suspense fallback={<p>Loading</p>}> */}
        {isDataDownloaded && <div className={styles.grid}>
            {data.map((post) => (
              <div className={styles.grid} key={post.id}>
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
          </div>}
          
        {/* </Suspense> */}
      </main>
    </>
  );
}
