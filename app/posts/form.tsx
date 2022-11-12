import { useState } from "react";

export default function Form() {
  // might not be the mos effient way to create one state manager for each
  const [inputs, setInputs] = useState({
    jobName: "",
    description: "",
    category: "",
    field: "",
    academicLevel: "",
    location: "",
  });

  //   const [textarea, setTextarea] = useState("");
  //   const [field, setField] = useState("");
  //   const [category, setCategory] = useState("");
  //   const [academicLevel, setAcademicLevelChange] = useState("");

  //   const handleCategoryChange = (event: any) => {
  //     setCategory(event.target.value);
  //   };
  //   const handleAcademicLevelChange = (event: any) => {
  //     setAcademicLevelChange(event.target.value);
  //   };
  //   const handleFieldChange = (event: any) => {
  //     setField(event.target.value);
  //   };
  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  //   const handleTextAreaChange = (event: any) => {
  //     setTextarea(event.target.value);
  //   };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    console.log(inputs);
  };

  return (
    <>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <form onSubmit={handleSubmit}>
        <br />

        <label>
          Job Name <br />
          <input
            type="text"
            name="jobName"
            value={inputs.jobName || ""}
            onChange={handleChange}
          />
        </label>

        <br />
        <br />

        <label>
          Job Description <br />
          <textarea
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
            name="category"
            value={inputs.category || ""}
            onChange={handleChange}
          >
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

        <label>
          Select Field <br />
          <select
            name="field"
            value={inputs.field || ""}
            onChange={handleChange}
          >
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
            name="academicLevel"
            value={inputs.academicLevel || ""}
            onChange={handleChange}
          >
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
            type="text"
            name="location"
            value={inputs.location || ""}
            onChange={handleChange}
          />
        </label>

        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
