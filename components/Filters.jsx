"use client"
import { message } from "antd";

import { useState, useEffect } from "react";
// import { getData } from "../app/feed/page";

import React from "react";


export default function Filters(props) {
    const updateFilters = props.updateFilters;

    const [filters, setFilters] = useState({
                  jobType: "",
                  location: "",
                  industry: "",
                  experience: "",
                });
        
    const filterData = async () => {
    try {
        // const response = await getData(null);
        console.log("Calling..");
    } catch (error) {
        message.error(error.message);
    }
    };

    return (
      <div>
        {/* <div className="sidebar d-flex justify-content-start gap-2 filter-wrapper"> */}
        <div className="sidebar justify-content-between flex gap-2 ">
          <select className="filterBox"
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
          </select>

          <select className="filterBox"
            name=""
            id=""
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          >
            <option value="">Location</option>
            <option value="Boston">Boston</option>
            <option value="Cambridge">Cambridge</option>
            <option value="New York">New York</option>
          </select>
          <select className="filterBox"
            name=""
            id=""
            value={filters.industry}
            onChange={(e) => setFilters({ ...filters, industry: e.target.value })}
          >
            <option value="">Industry</option>
            <option value="IT Software">IT Software</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
          </select>
  
          <select className="filterBox"
            name=""
            id=""
            value={filters.experience}
            onChange={(e) =>
              setFilters({ ...filters, experience: e.target.value })
            }
          >
            <option value="">Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="1 Year">1 Year</option>
            <option value="2 Years">2 Years</option>
            <option value="3 Years">3 Years</option>
            <option value="4 Years">4 Years</option>
          </select>
          <button className="primary-outlined-btn buttonFilter" onClick={() => {
          filterData({
            location:"",
            industry:"",
            experience:""
        })
         setFilters({
            location:"",
            industry:"",
            experience:""
         })
        }}>
          CLEAR
        </button>
          <button className="primary-outlined-btn buttonFilter"  onClick={() => updateFilters(filters)}>

            FILTER
          </button>
        </div>
      </div>
    );
}