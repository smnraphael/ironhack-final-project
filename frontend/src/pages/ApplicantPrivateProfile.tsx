import { Link, Navigate } from "react-router-dom";
import useAuth from "../context/useAuth";

const ApplicantPrivateProfile = () => {
  const { user } = useAuth();

  if (!user || user.__t === "Company") {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col gap-5">
      <a href="/" className="self-start">
        <p className="text-xs font-medium dark:text-white hover:underline hover:text-blue-600  dark:hover:text-blue-500">
          Back to job offers
        </p>
      </a>
      <h1 className="text-xl font-bold dark:text-white">My Profile</h1>
      <div className="flex flex-col items-start gap-5 justify-between p-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-600">
        {user.__t === "Applicant" && (
          <>
            <div className="flex justify-between w-full">
              <div className="flex flex-col sm:flex-row gap-5">
                <img
                  src={user.image}
                  alt={user.firstName}
                  className="h-36 w-36 rounded-lg object-cover"
                />
                <div className="flex flex-col gap-2">
                  <p className="font-semibold dark:text-white">
                    {user.firstName}
                  </p>
                  <p className="font-semibold dark:text-white">
                    {user.lastName}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {user.email}
                  </p>
                </div>
              </div>
              <div>
                <Link
                  to="/applicants/profile/edit-profile"
                  className="hover:underline hover:text-blue-600 dark:text-white pr-1"
                >
                  Edit
                </Link>
              </div>
            </div>
            <Link
              to="/applicants/applications"
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
