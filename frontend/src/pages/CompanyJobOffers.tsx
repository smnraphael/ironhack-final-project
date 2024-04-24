import { useEffect, useState } from "react";
import api from "../service/api";
import useAuth from "../context/useAuth";
import { Link } from "react-router-dom";

type Job = {
  _id: string;
  company: {
    _id: string;
    name: string;
    image: string;
  };
  jobOffers: {
    _id: string;
    position: string;
    positionOverview: string;
    employmentType: string;
    remote: boolean;
    salary: number;
    createdAt: Date;
    archived: boolean;
  }[];
};

const CompanyJobOffers = () => {
  const [companyJobs, setCompanyJobs] = useState<Job | null>(null);
  const [archived, setArchived] = useState("");

  const { user } = useAuth();

  useEffect(() => {
    const fetchCompanyJobs = async () => {
      try {
        const { data } = await api.get(`/companies/profile/${user?._id}`);
        setCompanyJobs(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCompanyJobs();
  }, [archived]);

  const archiveJobOffer = async (jobOfferId: string) => {
    try {
      const { data } = await api.patch(`/joboffers/${jobOfferId}`, {
        archived: true,
      });
      setArchived(data);
      console.log({ thisisdata: data });
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString();
  };

  if (!companyJobs) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      <Link to="/companies/profile" className="self-start">
        <p className="text-xs font-medium dark:text-white hover:underline hover:text-blue-600  dark:hover:text-blue-500">
          Back to profile
        </p>
      </Link>
      <h1 className="text-xl font-bold dark:text-white">Job Offers</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-800 dark:text-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3">
                Position
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {companyJobs.jobOffers &&
              companyJobs.jobOffers.map((offer) => (
                <tr
                  key={offer._id}
                  className="bg-white hover:bg-gray-100 border-b dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-50"
                  >
                    <p>{offer.position}</p>
                  </th>
                  <td className="px-6 py-4">{formatDate(offer.createdAt)}</td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/companies/job-offers/${offer._id}`}
                      className="text-blue-600 hover:underline dark:text-blue-500"
                    >
                      View applicants
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    {offer.archived ? (
                      <p>Archived</p>
                    ) : (
                      <button
                        onClick={() => archiveJobOffer(offer._id)}
                        className="text-red-700 hover:underline dark:text-red-500"
                      >
                        Archive
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyJobOffers;
