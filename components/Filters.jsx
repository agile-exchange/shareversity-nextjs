"use client"
import { message } from "antd";

import { useState, useEffect } from "react";
// import { getData } from "../app/feed/page";

import React from "react";


export default function Filters(props) {
    const updateFilters = props.updateFilters;

    const [filters, setFilters] = useState({
                  jobType: "",
                  industry: "",
                  experience: "",
                });
        
              // const dispatch = useDispatch();

    const filterData = async () => {
    try {
        // dispatch(ShowLoading());
        const response = await getData(null);
        // if (response.success) {
        //   const approvedJobs = response.data.filter(
        //     (job) => job.status === "approved"
        //   );
        //   setData(approvedJobs);
        // }
    
        // dispatch(HideLoading());
    } catch (error) {
        // dispatch(HideLoading());
        message.error(error.message);
    }
    };

              return (
                <div>
                  <div className="d-flex justify-content-start gap-2">
                    <select
                      name=""
                      id=""
                      value={filters.jobType}
                      onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}
                    >
                      <option value="">Job Type</option>
                      <option value="Internship">Internship</option>
                      <option value="Full Time">Full Time</option>
                      <option value="Part Time">Part Time</option>
                      <option value="Contract">Contract</option>
                      <option value="Temporary">Temporary</option>
                      <option value="Internship">Internship</option>
                    </select>
                    <select
                      name=""
                      id=""
                      value={filters.industry}
                      onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
                    >
                      <option value="">Industry</option>
                      <option value="it">IT</option>
                      <option value="finance">Finance</option>
                      <option value="marketing">Marketing</option>
                    </select>
            
                    <select
                      name=""
                      id=""
                      value={filters.experience}
                      onChange={(e) =>
                        setFilters({ ...filters, experience: e.target.value })
                      }
                    >
                      <option value="">Experience</option>
                      <option value="0">Fresher</option>
                      <option value="1">1 Year</option>
                      <option value="2">2 Years</option>
                      <option value="3">3</option>
                    </select>
                    <button className="primary-outlined-btn" onClick={() => {
                      filterData({
                        jobType:"",
                        industry:"",
                        experience:""
                    })
                     setFilters({
                        jobType:"delhi",
                        industry:"",
                        experience:""
                     })
                    }}>
                      CLEAR
                    </button>
                    <button className="primary-contained-btn" onClick={() => updateFilters(filters)}>
                      FILTER
                    </button>
                  </div>
                </div>
              );
}