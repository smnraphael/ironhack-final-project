import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../service/api";
import useAuth from "../context/useAuth";
import useFav from "../context/useFav";

type Job = {
  _id: string;
  position: string;
  location: string;
  employmentType: string;
  experience: number;
  workLevel: string;
  remote: boolean;
  salary: number;
  companyOverview: string;
  positionOverview: string;
  keyResponsibilities: string;
  qualifications: string;
  company: {
    _id: string;
    image: string;
    name: string;
  };
};

type Favorites = {
  _id: string;
  jobOffer: string;
  applicant: string;
}[];

const OneJobOffer = () => {
  const [job, setJob] = useState<Job | null>(null);
  const [isFavorite, setIsFavorite] = useState<Favorites>([]);

  const { isLoggedIn } = useAuth();
  const { jobOfferId } = useParams();
  const { favorites, fetchFavorites } = useFav();

  useEffect(() => {
    const fetchOneJob = async () => {
      try {
        const { data } = await api.get(`/joboffers/${jobOfferId}`);
        setJob(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOneJob();
  }, [jobOfferId]);

  useEffect(() => {
    if (isLoggedIn) {
      fetchFavorites();
    }
  }, [isLoggedIn, jobOfferId, isFavorite]);

  const handleAddToFavorite = async () => {
    try {
      const { data } = await api.post(`/favorites/${jobOfferId}`);
      setIsFavorite(data);
      console.log({ isFavorite: data });
    } catch (error) {
      console.log(error);
    }
  };

  let isJobOfferFavorite = false;

  if (favorites) {
    for (const favorite of favorites) {
      if (favorite.jobOffer === jobOfferId) {
        isJobOfferFavorite = true;
        break;
      }
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <a href="/" className="self-start">
        <p className="text-xs font-medium dark:text-white hover:underline hover:text-blue-600  dark:hover:text-blue-500">
          Back to job offers
        </p>
      </a>
      <div>
        {job && (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-1 justify-between">
                <p className="text-3xl font-bold dark:text-white">
                  {job.position}
                </p>
                {isLoggedIn && !isJobOfferFavorite && (
                  <button
                    onClick={handleAddToFavorite}
                    className="dark:text-white"
                  >
                    Add to wishlist
                  </button>
                )}
              </div>
              <Link to={`/companies/${job.company._id}`}>
                <p className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                  {job.company.name}
                </p>
              </Link>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                {job.location}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-md font-bold dark:text-white">
                Company Overview
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                {job.companyOverview.split("\n").map((item, index) => (
                  <React.Fragment key={index}>
                    {item}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-md font-bold dark:text-white">
                Position Overview
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                {job.positionOverview.split("\n").map((item, index) => (
                  <React.Fragment key={index}>
                    {item}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-md font-bold dark:text-white">
                Key Responsibilities
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                {job.keyResponsibilities.split("\n").map((item, index) => (
                  <React.Fragment key={index}>
                    {item}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-md font-bold dark:text-white">
                Required Qualifications
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                {job.qualifications.split("\n").map((item, index) => (
                  <React.Fragment key={index}>
                    {item}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-800 dark:text-gray-300">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Work Level
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Experience
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Employment Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Remote
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Salary
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-700 dark:border-gray-600">
                    <td>
                      <p className="px-6 py-4">{job.workLevel}</p>
                    </td>
                    <td>
                      <p className="px-6 py-4">
                        {job.experience} years minimum
                      </p>
                    </td>
                    <td>
                      <p className="px-6 py-4">{job.employmentType}</p>
                    </td>
                    <td>
                      <p className="px-6 py-4">{job.remote}</p>
                    </td>
                    <td>
                      <p className="px-6 py-4">${job.salary}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {isLoggedIn ? (
              <Link
                to={`/job-offers/${jobOfferId}/application`}
                className="self-center inline-flex items-center px-5 py-3 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Apply
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
            ) : (
              <Link
                to="/applicants/login"
                className="self-center inline-flex items-center px-5 py-3 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Apply
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
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default OneJobOffer;
