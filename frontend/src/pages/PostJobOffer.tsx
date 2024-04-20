import { useState } from "react";
import api from "../service/api";

const PostJobOffer = () => {
  const [formState, setFormState] = useState({
    position: "",
    location: "",
    employmentType: "Full-Time",
    experience: "",
    workLevel: "Student Level",
    salary: "",
    companyOverview: "",
    positionOverview: "",
    keyResponsibilities: "",
    remote: "On Site",
  });

  const {
    position,
    location,
    employmentType,
    experience,
    workLevel,
    salary,
    companyOverview,
    positionOverview,
    keyResponsibilities,
    remote,
  } = formState;

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const key = e.currentTarget.id;
    const value = e.currentTarget.value;
    setFormState({ ...formState, [key]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(formState);
      const response = await api.post("/joboffers", formState);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-2"
      >
        <h1>Create a new Job Offer</h1>
        <div className="flex flex-col">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            name="position"
            value={position}
            onChange={handleChange}
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={handleChange}
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div>
          <label htmlFor="employmentType">Employment Type</label>
          <select
            id="employmentType"
            name="employmentType"
            value={employmentType}
            onChange={handleChange}
            required
            className="border rounded-lg p-2 flex flex-col"
          >
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="experience">Experience</label>
          <input
            type="number"
            id="experience"
            name="experience"
            value={experience}
            onChange={handleChange}
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div>
          <label htmlFor="workLevel">Work Level</label>
          <select
            id="workLevel"
            name="workLevel"
            value={workLevel}
            onChange={handleChange}
            required
            className="border rounded-lg p-2 flex flex-col"
          >
            <option value="Student Level">Student Level</option>
            <option value="Entry Level">Entry Level</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Senior Level">Senior Level</option>
            <option value="Director Level">Director Level</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="salary">Salary</label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={salary}
            onChange={handleChange}
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="companyOverview">Company Overview</label>
          <textarea
            id="companyOverview"
            name="companyOverview"
            value={companyOverview}
            onChange={handleChange}
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="positionOverview">Position Overview</label>
          <textarea
            id="positionOverview"
            name="positionOverview"
            value={positionOverview}
            onChange={handleChange}
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="keyResponsibilities">Key Responsibilities</label>
          <textarea
            id="keyResponsibilities"
            name="keyResponsibilities"
            value={keyResponsibilities}
            onChange={handleChange}
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div>
          <label htmlFor="remote">Remote</label>
          <select
            id="remote"
            name="remote"
            value={remote}
            onChange={handleChange}
            required
            className="border rounded-lg p-2 flex flex-col"
          >
            <option value="On Site">On Site</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Remote">Remote</option>
          </select>
        </div>
        <div>
          <button type="submit" className="bg-blue-200 rounded-lg p-2">
            Post new Job Offer
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostJobOffer;
