import React from "react";
import { Link, Navigate } from "react-router-dom";
import useAuth from "../context/useAuth";

const CompanyPrivateProfile = () => {
  const { user } = useAuth();

  if (!user || user.__t === "Applicant") {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col gap-5">
      <a href="/" className="self-start">
        <p className="text-xs font-medium dark:text-white hover:underline hover:text-blue-600  dark:hover:text-blue-500">
          Back to job offers
        </p>
      </a>
      <h1 className="text-xl font-bold dark:text-white">Company Profile</h1>
      <div className="flex flex-col items-center sm:items-start gap-5 justify-between p-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-600">
        {user.__t === "Company" && (
          <>
            <div className="flex flex-col justify-between sm:flex-row w-full gap-5">
              <div className="flex flex-row gap-5 sm:w-fit">
                <img
                  src={user.image}
                  alt={user.name}
                  className="h-20 rounded-lg"
                />

                <div className="flex flex-col gap-2">
                  <p className="text-xl font-semibold dark:text-white">
                    {user.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {user.email}
                  </p>
                  <a
                    href={user.website}
                    target="_blank"
                    className="text-sm text-gray-600 dark:text-gray-300 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                  >
                    {user.website}
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-5 sm:w-7/12">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold dark:text-white">Description:</p>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    {user.description &&
                      user.description.split("\n").map((item, index) => (
                        <React.Fragment key={index}>
                          {item}
                          <br />
                        </React.Fragment>
                      ))}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold dark:text-white">Headquarters:</p>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    {user.headquarters}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold dark:text-white">
                    Number of employees:
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    {user.numberOfEmployees}
                  </p>
                </div>
              </div>

              <div>
                <Link to="/companies/profile/edit-profile">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.92971 19.283L5.92972 19.283L5.95149 19.2775L5.95151 19.2775L8.58384 18.6194C8.59896 18.6156 8.61396 18.6119 8.62885 18.6082C8.85159 18.5528 9.04877 18.5037 9.2278 18.4023C9.40683 18.301 9.55035 18.1571 9.71248 17.9947C9.72332 17.9838 9.73425 17.9729 9.74527 17.9618L16.9393 10.7678L16.9393 10.7678L16.9626 10.7445C17.2761 10.4311 17.5461 10.1611 17.7333 9.91573C17.9339 9.65281 18.0858 9.36038 18.0858 9C18.0858 8.63961 17.9339 8.34719 17.7333 8.08427C17.5461 7.83894 17.276 7.5689 16.9626 7.2555L16.9393 7.23223L16.5858 7.58579L16.9393 7.23223L16.7678 7.06066L16.7445 7.03738C16.4311 6.72395 16.1611 6.45388 15.9157 6.2667C15.6528 6.0661 15.3604 5.91421 15 5.91421C14.6396 5.91421 14.3472 6.0661 14.0843 6.2667C13.8389 6.45388 13.5689 6.72395 13.2555 7.03739L13.2322 7.06066L6.03816 14.2547C6.02714 14.2658 6.01619 14.2767 6.00533 14.2875C5.84286 14.4496 5.69903 14.5932 5.59766 14.7722C5.4963 14.9512 5.44723 15.1484 5.39179 15.3711C5.38809 15.386 5.38435 15.401 5.38057 15.4162L4.71704 18.0703C4.71483 18.0791 4.7126 18.088 4.71036 18.097C4.67112 18.2537 4.62921 18.421 4.61546 18.5615C4.60032 18.7163 4.60385 18.9773 4.81326 19.1867C5.02267 19.3961 5.28373 19.3997 5.43846 19.3845C5.57899 19.3708 5.74633 19.3289 5.90301 19.2896C5.91195 19.2874 5.92085 19.2852 5.92971 19.283Z"
                      stroke="#222222"
                    />
                    <path
                      d="M12.5 7.5L15.5 5.5L18.5 8.5L16.5 11.5L12.5 7.5Z"
                      fill="#222222"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="flex gap-5">
              <Link
                to={`/companies/publish-job-offer`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-100"
              >
                Publish a new job offer
              </Link>

              <Link
                to={`/companies/job-offers`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                See all job offers
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
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CompanyPrivateProfile;
