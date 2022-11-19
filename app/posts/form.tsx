import { useState } from "react";
import supabase from "../../utils/supabase";
import { useRouter } from "next/navigation";
import styles from "../page.module.css";
import { titleCase, headlineLength } from "./validate";


export default function Form() {
  // define variables, any future fields need to be added here
  const [inputs, setInputs] = useState({
    jobName: "",
    description: "",
    headline: "",
    category: "",
    field: "",
    academicLevel: "",
    isRemote: "",
    location: "",
    skills: "",
    schedule: "",
    institution: "",
    department: "",
    application_link: "",
    compensation: "",
  });

  // changes the input values to the values in the form
  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const router = useRouter();

  // submits the form to the database
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // send data to supabase
    const { data, error } = await supabase.from("posts").insert([
      {
        jobName: titleCase(inputs.jobName),
        description: inputs.description,
        headline: headlineLength(inputs.headline),
        category: inputs.category,
        field: inputs.field,
        academicLevel: inputs.academicLevel,
        isRemote: inputs.isRemote,
        location: inputs.location,
        skills: inputs.skills,
        schedule: inputs.schedule,
        institution: inputs.institution,
        department: inputs.department,
        application_link: inputs.application_link,
        compensation: inputs.compensation,
        // contact info
        // change order of fields
        //
      },
    ]);
    console.log({ data, error });

    // redirect to feed
    router.push("/feed");
  };

  // Input types
  // https://www.w3schools.com/html/html_form_input_types.asp
  return (
    <>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <br />
          <h1>Job details</h1>
          <label>
            Job Name <br />
            <input
              required
              className={styles.input}
              type="text"
              name="jobName"
              value={inputs.jobName || ""}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Headline <small>(100 characters max)</small> <br />
            <textarea
              className={styles.input}
              name="headline"
              value={inputs.headline || ""}
              onChange={handleChange}
              maxLength={100}
            />
          </label>
          <br />
          <br />

          <label>
            Job Description <br />
            <textarea
              className={styles.input}
              name="description"
              value={inputs.description || ""}
              onChange={handleChange}
            />
          </label>

          <br />
          <br />
          <label>
            Job Category <br />
            <select
              className={styles.input}
              name="category"
              value={inputs.category || ""}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="Internship">Internship</option>
              <option value="Research Assistant">Research Assistant</option>
              <option value="Assistanship">Assistanship</option>
              <option value="Fellowship">Fellowship</option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="Voluntary">Voluntary</option>
            </select>
          </label>

          <br />
          <br />
          <h1>Other details</h1>

          <label>
            Job Type <br />
            <select
              className={styles.input}
              name="isRemote"
              value={inputs.category || ""}
              onChange={handleChange}
            >
              <option value="">Select Type</option>
              <option value="Remote">Remote</option>
              <option value="On Site">On Site</option>
            </select>
          </label>

          <br />
          <br />

          <label>
            Field <br />
            <select
              className={styles.input}
              name="field"
              value={inputs.field || ""}
              onChange={handleChange}
            >
              <option value="">Select Field</option>
              <option value="Bioinformatics">Bioinformatics</option>
              <option value="Biomedicine">Biomedicine</option>{" "}
              <option value="Computer Scicence">Computer Science</option>
              <option value="Earth and Planetary Science">
                Earth and Planetary Science
              </option>
              <option value="Epidemiology">Epidemiology</option>
              <option value="Endocrinology">Endocrinology</option>
              <option value="Genetics">Genetics</option>
              <option value="Gerontology">Gerontology</option>
              <option value="Microbiology">Microbiology</option>
              <option value="Medicine">Medicine</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Nanotechnology">Nanotechnology</option>
              <option value="Pharmacology">Pharmacology</option>
              <option value="Physics">Physics</option>
              <option value="Social Science">Social Science</option>
            </select>
          </label>
          <br />
          <br />

          <label>
            Academic Level <br />
            <select
              className={styles.input}
              name="academicLevel"
              value={inputs.academicLevel || ""}
              onChange={handleChange}
            >
              <option value="">Select Academic Level</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
              <option value="Any">Any</option>
            </select>
          </label>

          <br />
          <br />

          <label>
            Location <br />
            <input
              className={styles.input}
              type="text"
              name="location"
              value={inputs.location || ""}
              onChange={handleChange}
            />
          </label>

          <br />
          <br />

          <label>
            Skills <br />
            <input
              className={styles.input}
              type="text"
              name="skills"
              value={inputs.skills || ""}
              onChange={handleChange}
            />
          </label>

          <br />
          <br />

          <label>
            Schedule <br />
            <input
              className={styles.input}
              type="text"
              name="schedule"
              value={inputs.schedule || ""}
              onChange={handleChange}
            />
          </label>

          <br />
          <br />

          <label>
            Institution <br />
            <input
              className={styles.input}
              type="text"
              name="institution"
              value={inputs.institution || ""}
              onChange={handleChange}
            />
          </label>

          <br />
          <br />

          <label>
            Department <br />
            <input
              className={styles.input}
              type="text"
              name="department"
              value={inputs.department || ""}
              onChange={handleChange}
            />
          </label>

          <br />
          <br />

          <label>
            Application Link <br />
            <input
              className={styles.input}
              type="text"
              name="application_link"
              value={inputs.application_link || ""}
              onChange={handleChange}
            />
          </label>

          <br />
          <br />
          <label>
            Compensation <br />
            <input
              className={styles.input}
              type="text"
              name="compensation"
              value={inputs.compensation || ""}
              onChange={handleChange}
            />
          </label>

          <br />
          <br />

          <input className={styles.submit} type="submit" />
        </form>
      </div>
    </>
  );
}
