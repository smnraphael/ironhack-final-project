import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFav from "../context/useFav";
import useJob from "../context/useJob";

type Job = {
  _id: string;
  company: {
    _id: string;
    image: string;
    name: string;
  };
  position: string;
  positionOverview: string;
  employmentType: string;
  workLevel: string;
  remote: string;
  salary: number;
  createdAt: Date;
  jobOffers: {
    _id: string;
    position: string;
    positionOverview: string;
    employmentType: string;
    remote: boolean;
    salary: number;
    createdAt: Date;
  }[];
};

const ApplicantFavorites = () => {
  const { favorites, fetchFavorites, handleDeleteFavorite } = useFav();
  const { jobs, fetchJobs } = useJob();
  const [favoriteJobs, setFavoriteJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetchFavorites();
    fetchJobs();
  }, []);

  useEffect(() => {
    if (favorites && jobs) {
      const favoriteJobIds = favorites.map((favorite) => favorite.jobOffer);
      const favoriteJobs = jobs.filter((job) =>
        favoriteJobIds.includes(job._id)
      );
      setFavoriteJobs(favoriteJobs);
    }
  }, [favorites, jobs]);

  return (
    <div className="flex flex-col gap-5">
      <Link to="/applicants/profile" className="self-start">
        <p className="text-xs font-medium dark:text-white hover:underline hover:text-blue-600  dark:hover:text-blue-500">
          Back to profile
        </p>
      </Link>
      <h1 className="text-xl font-bold dark:text-white">My Wishlist</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-800 dark:text-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3">
                Position
              </th>
              <th scope="col" className="px-6 py-3">
                Company
              </th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {favorites &&
              favorites.map((favorite) => {
                const job = favoriteJobs.find(
                  (job) => job._id === favorite.jobOffer
                );
                return (
                  job && (
                    <tr
                      key={job._id}
                      className="bg-white border-b dark:bg-gray-700 dark:border-gray-600"
                    >
                      <td>
                        <p className="px-6 py-4">{job.position}</p>
                      </td>
                      <td>
                        <p className="px-6 py-4">{job.company.name}</p>
                      </td>
                      <td>
                        <Link
                          to={`/job-offers/${job._id}`}
                          className="px-6 py-4 text-blue-600 hover:underline dark:text-blue-500"
                        >
                          View
                        </Link>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDeleteFavorite(favorite._id)}
                          className="px-6 py-4 text-red-700 hover:underline dark:text-red-500"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicantFavorites;
