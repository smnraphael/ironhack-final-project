import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api";
import useAuth from "../context/useAuth";
import { AxiosError } from "axios";

const EditCompanyProfile = () => {
  const { user, authenticateUser } = useAuth();

  let companyNameForm = "";
  let companyHeadquartersForm = "";
  let companyNumberOfEmployeesForm = 0;
  let companyWebsiteForm = "";
  let companyDescriptionForm = "";
  let companyEmailForm = "";

  if (user?.__t === "Company") {
    companyNameForm = user.name;
    companyHeadquartersForm = user.headquarters;
    companyNumberOfEmployeesForm = user.numberOfEmployees;
    companyWebsiteForm = user.website;
    companyDescriptionForm = user.description;
    companyEmailForm = user.email;
  }

  const [formData, setFormData] = useState({
    name: companyNameForm,
    headquarters: companyHeadquartersForm,
    numberOfEmployees: companyNumberOfEmployeesForm,
    website: companyWebsiteForm,
    description: companyDescriptionForm,
    email: companyEmailForm,
  });
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { id, value } = e.currentTarget;
    setFormData({ ...formData, [id]: value });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let dataToSend;
      if (file !== null) {
        const fd = new FormData();
        fd.append("name", formData.name);
        fd.append("headquarters", formData.headquarters);
        fd.append("numberOfEmployees", formData.numberOfEmployees.toString());
        fd.append("website", formData.website);
        fd.append("description", formData.description);
        fd.append("email", formData.email);
        fd.append("image", file);
        dataToSend = fd;
      } else {
        dataToSend = {
          name: formData.name,
          headquarters: formData.headquarters,
          numberOfEmployees: formData.numberOfEmployees,
          website: formData.website,
          description: formData.description,
          email: formData.email,
        };
      }

      const response = await api.put(`/companies/${user?._id}`, dataToSend);
      console.log("Response:", response);
      if (response.status === 200) {
        authenticateUser();
        navigate("/companies/profile");
      }
    } catch (error: unknown) {
      console.error("Error:", error);
      if (error instanceof AxiosError) {
        console.log("Error message:", error.message);
        setError(error.response?.data?.message);
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <a href="/companies/profile" className="self-start">
        <p className="text-xs font-medium dark:text-white hover:underline hover:text-blue-600  dark:hover:text-blue-500">
          Back to profile
        </p>
      </a>
      <h1 className="text-xl font-bold dark:text-white">Edit Profile</h1>
      <div className="flex flex-col items-start gap-5 justify-between p-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-600">
        {user && user.__t === "Company" && (
          <>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  id="name"
                  name="name"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="numberOfEmployees"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={6}
                  value={formData.description}
                  onChange={handleChange}
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="numberOfEmployees"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Headquarters
                </label>
                <input
                  value={formData.headquarters}
                  onChange={handleChange}
                  type="text"
                  id="headquarters"
                  name="headquarters"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="numberOfEmployees"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Number of employees
                </label>
                <input
                  type="number"
                  id="numberOfEmployees"
                  name="numberOfEmployees"
                  step="1000"
                  value={formData.numberOfEmployees}
                  onChange={handleChange}
                  onWheel={(event) => event.currentTarget.blur()}
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="numberOfEmployees"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Website
                </label>
                <input
                  value={formData.website}
                  onChange={handleChange}
                  type="text"
                  id="website"
                  name="website"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="file"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Avatar
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => {
                    const selectedFile = e.target.files
                      ? e.target.files[0]
                      : null;
                    if (selectedFile) {
                      setFile(selectedFile);
                    }
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  id="email"
                  name="email"
                  disabled
                  className="bg-gray-200 border border-gray-300 text-gray-600 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save
              </button>
              {error ? (
                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-red-900 dark:text-red-200">
                  <p className="text-center">{error}</p>{" "}
                </div>
              ) : null}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default EditCompanyProfile;
