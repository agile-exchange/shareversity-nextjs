import styles from "../page.module.css";

export default function Search (){
   return (<>

   <label>
            Search Profiles <br />
            <input
              className={styles.input}
              type="text"
              name="profile-search"
            />
          </label>
   
   
   </>) 
}