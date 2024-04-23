import { useState } from "react";
import api from "../service/api";
import { useNavigate, Link } from "react-router-dom";
import { AxiosError } from "axios";

const ApplicantSignup = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const { email, password, firstName, lastName } = formState;

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.id;
    const value = e.target.value;
    setFormState({ ...formState, [key]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const reponse = await api.post("/auth/applicant/signup", formState);
      if (reponse.status === 201) {
        navigate("/applicants/login");
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.log(error.message);
        setError(error.response?.data?.message);
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign up as Applicant
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                value={firstName}
                onChange={handleChange}
                type="text"
                id="firstName"
                name="firstName"
                placeholder="John"
                autoComplete="on"
                required
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                value={lastName}
                onChange={handleChange}
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                autoComplete="on"
                required
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
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
                placeholder="johndoe@example.com"
                autoComplete="on"
                required
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
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
                autoComplete="on"
                required
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign up
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                to="/applicants/login"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Sign in
              </Link>
            </p>
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

export default ApplicantSignup;
