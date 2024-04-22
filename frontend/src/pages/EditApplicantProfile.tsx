import { useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";
import { useState } from "react";
import api from "../service/api";
import { AxiosError } from "axios";

const EditApplicantProfile = () => {
  const { user, authenticateUser } = useAuth();

  let userFirstNameForm = "";
  let userLastNameForm = "";
  let userEmailForm = "";

  if (user?.__t === "Applicant") {
    userFirstNameForm = user.firstName;
    userLastNameForm = user.lastName;
    userEmailForm = user.email;
  }

  const [formData, setFormData] = useState({
    firstName: userFirstNameForm,
    lastName: userLastNameForm,
    email: userEmailForm,
  });
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.currentTarget;
    setFormData({ ...formData, [id]: value });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let dataToSend;
      if (file !== null) {
        const fd = new FormData();
        fd.append("firstName", formData.firstName);
        fd.append("lastName", formData.lastName);
        fd.append("email", formData.email);
        fd.append("image", file);
        dataToSend = fd;
      } else {
        dataToSend = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
        };
      }

      const response = await api.put(`/applicants/${user?._id}`, dataToSend);
      console.log("Response:", response);
      if (response.status === 200) {
        authenticateUser();
        navigate("/applicants/profile");
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
      <h1 className="text-xl font-bold dark:text-white">Edit Profile</h1>
      <div className="flex flex-col items-start gap-5 justify-between p-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-600">
        {user && user.__t === "Applicant" && (
          <>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  value={formData.firstName}
                  onChange={handleChange}
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  value={formData.lastName}
                  onChange={handleChange}
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
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
                  placeholder="johndoe@example.com"
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
                  placeholder="johndoe@example.com"
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

export default EditApplicantProfile;
