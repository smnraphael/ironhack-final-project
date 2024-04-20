import { useState } from "react";
import api from "../service/api";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

const CompanySignup = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    name: "",
    headquarters: "",
    numberOfEmployees: "",
    website: "",
    description: "",
  });
  const [error, setError] = useState<string | undefined>("");
  const navigate = useNavigate();

  const {
    email,
    password,
    name,
    headquarters,
    numberOfEmployees,
    website,
    description,
  } = formState;

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const key = e.target.id;
    const value = e.target.value;
    setFormState({ ...formState, [key]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const reponse = await api.post("/auth/company/signup", formState);
      if (reponse.status === 201) {
        navigate("/company/login");
      }
    } catch (error: unknown) {
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
            Sign up as Company
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                value={email}
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                placeholder="hr@google.com"
                required
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                value={password}
                onChange={handleChange}
                type="password"
                id="password"
                name="password"
                placeholder="••••••••••••"
                required
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                value={name}
                onChange={handleChange}
                type="text"
                id="name"
                name="name"
                placeholder="Google LLC"
                required
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="headquarters"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Headquarters
              </label>
              <input
                value={headquarters}
                onChange={handleChange}
                type="text"
                id="headquarters"
                name="headquarters"
                placeholder="Googleplex, Mountain View, California, U.S."
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="numberOfEmployees"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Number of Employees
              </label>
              <input
                value={numberOfEmployees}
                onChange={handleChange}
                type="number"
                id="numberOfEmployees"
                name="numberOfEmployees"
                placeholder="140000"
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="website"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Website
              </label>
              <input
                value={website}
                onChange={handleChange}
                type="url"
                id="website"
                name="website"
                placeholder="https://about.google/"
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                value={description}
                onChange={handleChange}
                id="description"
                name="description"
                placeholder="Put the description of your company here."
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              Sign up
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

export default CompanySignup;
