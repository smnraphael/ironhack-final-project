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
              <div className="flex justify-between w-full gap-2">
                <div className="flex flex-col sm:flex-row gap-5 justify-between w-full">
                  <div className="flex gap-5 w-6/12">
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

                  <div className="sm:w-6/12 flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold dark:text-white">
                        Description:
                      </p>
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
                      <p className="font-semibold dark:text-white">
                        Headquarters:
                      </p>
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
                </div>
                <div>
                  <div>
                    <Link
                      to="/companies/profile/edit-profile"
                      className="text-sm text-gray-600 dark:text-gray-300 hover:underline hover:text-blue-600 pr-1"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-5">
              <Link
                to={`/companies/publish-job-offer`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-100"
              >
                Publish new job offer
              </Link>

              <Link
                to={`/companies/job-offers`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                See job offers
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
