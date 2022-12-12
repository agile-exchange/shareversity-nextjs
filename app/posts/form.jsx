import { useState, useEffect } from "react";
import supabase from "../../utils/supabase-browser";
import { useRouter } from "next/navigation";
import styles from "../page.module.css";
import Select from 'react-select'
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
    minExperience: "",
    industry: "",
    workPlaceType: "",
    jobType: "",
    duration: "",
    field: "",
    academicLevel: "",
    isRemote: "",
    location: "",
    skills: "",
    schedule: "",
    institution: "",
    department: "",
    compensationType: "",
    compensation: "",
    application_link: "",
    applicationDeadline: "",
    applicationProcess: "",
    primaryContact: "",
  });

  const jobSkills = [
    { value: 'Java', label: 'java' },
    { value: 'React', label: 'react' },
    { value: 'js', label: 'js' },
    { value: 'C++', label: 'C++' },
    { value: 'NodeJs', label: 'CNodeJs' }
  ]

  const jobSchedule = [
    { value: '8 hours shift', label: '8 hours shift' },
    { value: 'Monday to Friday', label: 'Monday to Friday' },
    { value: 'Weekend Availability', label: 'Weekend Availability' },
    { value: 'No weekends', label: 'No weekends' },
    { value: 'NightShift', label: 'NightShift' },
    { value: 'Other', label: 'Other' },
  ]

  let inputStrings = [];
 
 // create a function to handle the button click
 const handleButtonClick = () => {
   // get the value from the input box
   let inputValue = document.getElementById('inputBox').value;
   if(inputValue.length === 0) {
       return;
   }
  
   // add the input value to the array of input strings
   inputStrings.push(inputValue);
  
   // clear the input box
   document.getElementById('inputBox').value = '';
  
 
   ////
   // create a new button element
 var button = document.createElement("button");
 
 // set the text of the button
 button.innerText = inputValue;
 
 // get the div element with the id "mydiv"
 var div = document.getElementById("abcd");
 
 // add the button to the div element
 div.appendChild(button);
 };


  const placeholder = "Enter Job Description..";

  const [skillsFinal, setSkillsFinal] = useState('');
  const [scheduleFinal, setScheduleFinal] = useState('');
  const [showCompensation, setShowCompensation] = useState(false);  
  const [showNewCompensation, setShowNewCompensation] = useState(false);

  const handleChangeSkills = (e) => {
    var value = [];
    for (var i = 0, l = e.length; i < l; i++) {
        value.push(e[i].value);
    }

    const str = value.join(',');
    setSkillsFinal(str);
  };

  const handleChangeSchedule = (e) => {
    var value = [];
    for (var i = 0, l = e.length; i < l; i++) {
        value.push(e[i].value);
    }

    const str = value.join(',');
    setScheduleFinal(str);
  };

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

    if(name=="compensationType"){
      if(value=="Paid"){
        setShowCompensation(true);
      }else{
        setShowCompensation(false);
      }

      if(value=="Other"){
        setShowNewCompensation(true);
      }else{
        setShowNewCompensation(false);
      }
    }
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
    const skillsNew = skillsFinal+","+inputStrings.join(",");
    console.log("skillsNew:" + skillsNew);
    // send data to supabase
    const { data, error } = await supabase.from("posts").insert([
      {
        jobName: titleCase(inputs.jobName),
        description: inputs.description,
        headline: headlineLength(inputs.headline),
        category: inputs.category,
        minExperience: inputs.minExperience,
        industry: inputs.industry,
        workPlaceType: inputs.workPlaceType,
        jobType: inputs.jobType,
        duration: inputs.duration,
        field: inputs.field,
        academicLevel: inputs.academicLevel,
        isRemote: inputs.isRemote,
        location: inputs.location,
        skills: skillsNew,
        schedule: inputs.schedule,
        institution: inputs.institution,
        department: inputs.department,
        compensationType: inputs.compensationType,
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
          Job Description  <br />
            <input
              required
              className={styles.input}
              type="text"
              name="description"
              value={inputs.description || ""}
              onChange={handleChange}
            />
          </label>
          <br />

          
          <br />
          <label>
            Industry <br />
            <select
              required
              className={styles.input}
              name="industry"
              value={inputs.industry || ""}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="IT Software">IT Software</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
              <option value="Other">Other</option>
            </select>
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
            Workplace Type <br />
            <select
              required
              className={styles.input}
              name="workPlaceType"
              value={inputs.workPlaceType || ""}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="On-Site">On-Site</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <br />
          <br />
          <label>
            Job Type <br />
            <select
              required
              className={styles.input}
              name="jobType"
              value={inputs.jobType || ""}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="Internship">Internship</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
              <option value="Temporary">Temporary</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <br />

          <br />
          <label>
            Duration <br />
            <select
              required
              className={styles.input}
              name="duration"
              value={inputs.duration || ""}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="3 months">3 months</option>
              <option value="6 months">6 months</option>
              <option value="8 months">8 months</option>
              <option value="12 months">12 months</option>
              <option value="Permanent">Permanent</option>
              <option value="Other">Other</option>
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
            Experience Required <br />
            <select
              required
              className={styles.input}
              name="minExperience"
              value={inputs.minExperience || ""}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="Fresher">Fresher</option>
              <option value="1 year">1 year</option>
              <option value="2 years">2 years</option>
              <option value="3 years">3 years</option>
              <option value="4 years">4 years</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <br />
          <br />
          <label>
            Institution <br />
            <select
              className={styles.input}
              name="academicLevel"
              value={inputs.academicLevel || ""}
              onChange={handleChange}
            >
              <option value="">Select Institution</option>
              <option value="Harvard Extension">Harvard Extension</option>
              <option value="Other">Other</option>
            </select>
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
            Skills Select <br />
            <Select
                isMulti
                name="skills"
                options={jobSkills}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleChangeSkills}
            />
          </label>
          <input type="text" id="inputBox" />
               <button type="button" id="button" onClick={handleButtonClick}>add more Skills!</button>
          <div id="abcd"></div>

          <br />
          <br />
          <label>
            Schedule <br />
            <Select
                isMulti
                name="skills"
                options={jobSchedule}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleChangeSchedule}
            />
          </label>
          <br/>
          <br />
          <label>
          Compensation Type <br />
            <select
              required
              className={styles.input}
              name="compensationType"
              value={inputs.compensationType || ""}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="Paid">Paid</option>
              <option value="UnPaid">UnPaid</option>
              <option value="Class Credit">Class Credit</option>
              <option value="Voluntary">Voluntary</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <br />
          <br />
          {showCompensation &&  <label>
            Enter Compensation<br />
            <input
              className={styles.input}
              type="text"
              name="compensation"
              value={inputs.compensation || ""}
              onChange={handleChange}
            />
          </label>}
          <br />
          {showNewCompensation &&  <label>
            Add Compensation Type <br />
            <input
              className={styles.input}
              type="text"
              name="newCompensation"
              value={inputs.newCompensation || ""}
              onChange={handleChange}
            />
          </label>}
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
