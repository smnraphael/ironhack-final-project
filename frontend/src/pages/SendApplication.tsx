import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../service/api";
import { AxiosError } from "axios";
import useAuth from "../context/useAuth";

const SendApplication = () => {
  const { user } = useAuth();

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
    coverLetter: "",
    socialNetwork: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const { jobOfferId } = useParams();

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
      if (file) {
        const fd = new FormData();
        fd.append("firstName", formData.firstName);
        fd.append("lastName", formData.lastName);
        fd.append("email", formData.email);
        fd.append("resume", file);
        fd.append("coverLetter", formData.coverLetter);
        fd.append("socialNetwork", formData.socialNetwork);
        dataToSend = fd;
      }

      const response = await api.post(
        `/applications/${user?._id}/${jobOfferId}`,
        dataToSend
      );

      console.log("Response:", response);

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
            Send your application
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="John"
                required
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                required
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="johndoe@example.com"
                required
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="resume"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Resume <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf"
                required
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
            <div className="flex flex-col">
              <label
                htmlFor="coverLetter"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                rows={6}
                placeholder="Write your cover letter here..."
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.coverLetter}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="socialNetwork"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Social Network
              </label>
              <input
                type="url"
                id="socialNetwork"
                name="socialNetwork"
                placeholder="http://linkedin.com/johndoe"
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.socialNetwork}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Apply
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

export default SendApplication;
