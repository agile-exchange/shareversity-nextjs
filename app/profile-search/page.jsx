// import styles from "../page.module.css";

export default function Search (){
   return (<>
<div className="profile_search">
   <label>
            <h1>Search Profiles</h1><br />
            <select
              name="academicLevel"
            //   value={inputs.academicLevel || ""}
            //   onChange={handleChange}
            >
              <option value="">Select Profile</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
              <option value="Any">Any</option>
            </select>
          </label>
          </div>
   
   </>) 
}