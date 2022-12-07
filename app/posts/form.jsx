import { useState, useEffect } from "react";
import supabase from "../../utils/supabase-browser";
import { useRouter } from "next/navigation";
import styles from "../page.module.css";
import { Editor } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { titleCase, headlineLength, validateFormData, validateEmail } from "../../utils/validate";

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
    compensation: "",
    application_link: "",
    applicationDeadline: "",
    applicationProcess: "",
    primaryContact: "",
  });

  const [incorrectJDEntered, setIncorrectJDEntered] = useState(false);

  const [profile, setProfile] = useState(null);
  useEffect(() => {
    fetchProfile();
  }, []);
  const fetchProfile = async () => {
    const user = await supabase.auth.getUser();
    if (user) {
      setProfile(user);
    }
    console.log(profile);
  };

  const handleChangeEditor = (data) => {
    console.log(data.getCurrentContent().getPlainText());
    setInputs((values) => ({ ...values, "description": data.getCurrentContent().getPlainText() }));
    console.log("hello world");
  };

  // changes the input values to the values in the form
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("name: " + name);
    console.log("value: " + value);
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const router = useRouter();

  // submits the form to the database
  const handleSubmit = async (event) => {

    if(inputs.description.length === 0) {
      setIncorrectJDEntered(true);
      return;
    }
    event.preventDefault();
    let result = '';
    try{
      validateFormData(inputs);
    }catch (error) {
      result = error.message;
      return;
    }
    fetchProfile();
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
        compensation: inputs.compensation,
        created_by: profile ? profile.data.user.email : profile,
        application_link: inputs.application_link,
        applicationDeadline: inputs.applicationDeadline,
        applicationProcess: inputs.applicationProcess,
        primaryContact: inputs.primaryContact,
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
          <div className={styles.subform}>
          <label>
            Job Title <br />
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
            { incorrectJDEntered && <label className="incorrectjd">Job Description cannot be empty <br /></label> }
             <Editor
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              name="description"
              wrapperStyle={{ width: 760, border: "1px solid black" }}
              value={inputs.description || ""}
              onEditorStateChange={handleChangeEditor}
            />

          </label>

          <br />
          <br />
          <label>
            Job Category <br />
            <select
              required
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
          </div>
          <br />
          <h1>Other details</h1>
          <div className={styles.subform}>

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
          </div>
          <br />
          <h1>Application Details</h1>
          <div className={styles.subform}>
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
            Application Deadline <br />
            <input
              className={styles.input}
              type="date"
              name="applicationDeadline"
              value={inputs.applicationDeadline || ""}
              onChange={handleChange}
            />
          </label>

          <br />
          <br />

          <label>
            Application Process <br />
            <input
              className={styles.input}
              type="text"
              name="applicationProcess"
              value={inputs.applicationProcess || ""}
              onChange={handleChange}
            />
          </label>

          <br />
          <br />

          <label>
            Primary Contact (Optional) <br />
            <input
              className={styles.input}
              type="text"
              name="primaryContact"
              value={inputs.primaryContact || ""}
              onChange={handleChange}
            />
          </label>

          <br />
          </div>
          <br />

          <input className={styles.submit} type="submit" />
        </form>
      </div>
    </>
  );
}
