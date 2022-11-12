import logo from "./richard.png";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputs, setInputs] = useState({});
  const [textarea, setTextarea] = useState("");
  const [category, setCategory] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleTextAreaChange = (event) => {
    setTextarea(event.target.value);
  };

  const handleSubmit = (event) => {
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
            name="jobname"
            value={inputs.jobname || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Job Description <br />
          <textarea value={textarea} onChange={handleTextAreaChange} />
        </label>

        <br />
        <br />
        <label>
          Select Category <br />
          <select value={category} onChange={handleCategoryChange}>
            <option value="Social Science">Social Science</option>
            <option value="Medicine">Medicine</option>
            <option value="Computer Scicence">Computer Science</option>
            <option value="Mathematics">Mathematics</option>
          </select>
        </label>

        <br />
        <br />

        <label>
          How many students are needed? <br />
          <input
            type="number"
            name="howmany"
            value={inputs.howmany || ""}
            onChange={handleChange}
          />
        </label>
<br /><br />
        <input type="submit" />
      </form>
    </>
  );
}

export default App;
