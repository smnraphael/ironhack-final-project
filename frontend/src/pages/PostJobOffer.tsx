import { useState } from "react";
import api from "../service/api";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";

const PostJobOffer = () => {
  const { user } = useAuth();

  let companyOverviewForm = "";

  if (user?.__t === "Company") {
    companyOverviewForm = user.description;
  }

  const [formState, setFormState] = useState({
    position: "",
    location: "",
    employmentType: "Full-Time",
    experience: "",
    workLevel: "Student Level",
    salary: "",
    companyOverview: companyOverviewForm,
    positionOverview: "",
    keyResponsibilities: "",
    qualifications: "",
    remote: "On Site",
  });
  const [error, setError] = useState<string>("");

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
    qualifications,
    remote,
  } = formState;

  const navigate = useNavigate();

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
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.message);
        setError(error.response?.data?.message);
        setTimeout(() => {
          setError("");
        }, 3000);
      }
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Publish a new job offer
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="position"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Position <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="position"
                name="position"
                value={position}
                onChange={handleChange}
                required
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={location}
                onChange={handleChange}
                required
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="employmentType"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Employment Type <span className="text-red-500">*</span>
              </label>
              <select
                id="employmentType"
                name="employmentType"
                value={employmentType}
                onChange={handleChange}
                required
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="experience"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Experience (years) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                step="1"
                id="experience"
                name="experience"
                value={experience}
                onChange={handleChange}
                required
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="workLevel"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Work Level <span className="text-red-500">*</span>
              </label>
              <select
                id="workLevel"
                name="workLevel"
                value={workLevel}
                onChange={handleChange}
                required
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Student Level">Student Level</option>
                <option value="Entry Level">Entry Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior Level">Senior Level</option>
                <option value="Director Level">Director Level</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="salary"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Salary ($) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="salary"
                name="salary"
                value={salary}
                step="1000"
                onChange={handleChange}
                required
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="companyOverview"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Company Overview <span className="text-red-500">*</span>
              </label>
              <textarea
                id="companyOverview"
                name="companyOverview"
                rows={6}
                value={companyOverview}
                onChange={handleChange}
                required
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="positionOverview"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Position Overview <span className="text-red-500">*</span>
              </label>
              <textarea
                id="positionOverview"
                name="positionOverview"
                rows={6}
                value={positionOverview}
                onChange={handleChange}
                required
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="keyResponsibilities"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Key Responsibilities <span className="text-red-500">*</span>
              </label>
              <textarea
                id="keyResponsibilities"
                name="keyResponsibilities"
                rows={6}
                value={keyResponsibilities}
                onChange={handleChange}
                required
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="qualifications"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Qualifications <span className="text-red-500">*</span>
              </label>
              <textarea
                id="qualifications"
                name="qualifications"
                rows={6}
                value={qualifications}
                onChange={handleChange}
                required
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="remote"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                On Site / Remote <span className="text-red-500">*</span>
              </label>
              <select
                id="remote"
                name="remote"
                value={remote}
                onChange={handleChange}
                required
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="On Site">On Site</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Publish
            </button>
            {error ? (
              <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-900 dark:text-red-200">
                <p className="text-center">{error}</p>{" "}
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJobOffer;
