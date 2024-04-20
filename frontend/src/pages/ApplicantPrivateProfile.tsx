import { Link } from "react-router-dom";
import useAuth from "../context/useAuth";

const ApplicantPrivateProfile = () => {
  const { user } = useAuth();
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-xl font-bold dark:text-white">My Profile</h1>
      <div className="flex flex-col items-center sm:items-start gap-5 justify-between p-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-600">
        {user?.__t === "Applicant" && (
          <>
            <div className="flex flex-col sm:flex-row gap-5">
              <img
                src={user.image}
                alt={user.firstName}
                className="h-36 rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <p className="font-semibold dark:text-white">
                  {user.firstName}
                </p>
                <p className="font-semibold dark:text-white">{user.lastName}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {user.email}
                </p>
              </div>
            </div>
            <Link
              to="/applicant/applications"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              See all my applications
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ApplicantPrivateProfile;
