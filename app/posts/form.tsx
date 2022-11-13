import { useState } from "react";
import supabase from "../../utils/supabase";
import { useRouter } from "next/navigation";
import styles from "../page.module.css";


export default function Form() {
  const [inputs, setInputs] = useState({
    jobName: "",
    description: "",
    category: "",
    field: "",
    academicLevel: "",
    location: "",
  });

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // send data to supabase
    const { data, error } = await supabase.from("posts").insert([
      {
        jobName: inputs.jobName,
        description: inputs.description,
        category: inputs.category,
        field: inputs.field,
        academicLevel: inputs.academicLevel,
        location: inputs.location,
      },
    ]);
    console.log({ data, error });

    // clear form
    // setInputs({
    //   jobName: "",
    //   description: "",
    //   category: "",
    //   field: "",
    //   academicLevel: "",
    //   location: "",
    // });

    // redirect to feed
    router.push("/feed");
  };

  return (
    <>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <br />

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
          <input className={styles.submit} type="submit" />
        </form>
      </div>
    </>
  );
}
