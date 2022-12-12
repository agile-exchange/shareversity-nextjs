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

function getNumDays(curr){
  let days = Math.ceil(Math.abs(new Date() - new Date(curr)) / (1000 * 60 * 60 * 24));
  if(days==0){
    return "Today";
  }
  return days + " days ago";
}

// ! data should not be any, need to figure out the best way to declare it, line 15
export default function Feed() {
  const [data, setData] = useState(null);
  const [noResultsFound, setNoResultsFound] = useState(false);
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
      const { data } = await supabase.from("posts").select("*").order('created_at', { ascending: false });
      // console.log(JSON.stringify(data));
      setIsDataDownloaded(true);
      setData(data);
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  const updateFilters = async (theFilters) => {
    console.log("filters: " + JSON.stringify(theFilters));
    let query = supabase.from('posts').select('*').order('created_at', { ascending: false });

    if(theFilters.jobType && theFilters.jobType.length > 0) {
      query = query.eq('jobType', theFilters.jobType);
    } 

    if(theFilters.location && theFilters.location.length > 0) {
      query = query.eq('location', theFilters.location);
    } 

    if(theFilters.industry && theFilters.industry.length > 0) {
      query = query.eq('industry', theFilters.industry);
    } 
    if(theFilters.experience && theFilters.experience.length > 0) {
      query = query.eq('minExperience', theFilters.experience);
    } 

    if(theFilters.field && theFilters.field.length > 0) {
      query = query.eq('field', theFilters.field);
    } 
    const { data } = await query;

    if(data==null){
      setNoResultsFound(true);
    }else{
      setIsDataDownloaded(true);
      setData(data);
    }
   
  }


  return (
    <>
      <main className={styles.main}>
        <h2 className={styles.title}>
          <a href="/">Job Feed</a>
        </h2>
        <div>
         <Filters updateFilters={updateFilters}/> 
        </div>
       
        {/* <button onClick={updateFilters}>Filter</button> */}
        {noResultsFound && <div>No Results Found</div>}
        {/* <Suspense fallback={<p>Loading</p>}> */}
        {isDataDownloaded && !noResultsFound && <div className={styles.grid}>
            {data && data.map((post) => (
              <div className={styles.grid} key={post.id}>
                {/* // feed posts are displayed here  */}
                  <div className={styles.card}>
                  <a href={`/feed/${post.id}`}>
                      <button class="viewJob"> View Job </button>
                  </a>
                    <h2 className="card-title"> <b>{post.jobName} </b>   
                    </h2>  

                    <hr class="new1"></hr>
                   
                    <h3>{post.institution}</h3>
                    <h3> {post.workPlaceType} in {post.location}</h3>

                    <p> {post.compensation} {post.jobType} {post.schedule}</p>                   
                    {/* <p className="card-description"> {post.description}</p> */}
                    <p className="card-headline"> {post.headline}</p>
                    {/* <p className="card-headline">
                      {post.created_by ? "Created by: " + post.created_by : ""}
                    </p> */}
                    <p> Last Date to apply {post.applicationDeadline}</p>
                    <h5> Posted  {getNumDays(post.created_at)} </h5>
                    {/* <a href={`/apply/${post.created_by}`}>
                    <button class="button"> Apply Now </button>
                    </a> */}
                    {/* <div id="buttontest">Bottom Content Div</div> */}
                  </div>
                {/* </a> */} 
              </div>
            ))}
          </div>}
          
        {/* </Suspense> */}
      </main>
    </>
  );
}
