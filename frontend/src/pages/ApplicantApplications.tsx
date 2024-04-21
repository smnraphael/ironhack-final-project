import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../service/api";

type Application = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  socialNetwork: string;
  resume: string;
  coverLetter: string;
  jobOffer: {
    position: string;
  };
  createdAt: Date;
};

const ApplicantApplications = () => {
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const { data } = await api.get(`/applicants/applications`);
        setApplications(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApplications();
  }, []);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className="flex flex-col gap-5">
      <Link to="/applicants/profile" className="self-start">
        <p className="text-xs font-medium dark:text-white hover:underline hover:text-blue-600  dark:hover:text-blue-500">
          Back to profile
        </p>
      </Link>
      <h1 className="text-xl font-bold dark:text-white">My Applications</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-800 dark:text-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3">
                Application
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application) => (
              <tr
                key={application._id}
                className="bg-white hover:bg-gray-100 border-b dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-50"
                >
                  <p>{application.jobOffer.position}</p>
                </th>
                <td className="px-6 py-4">
                  {formatDate(application.createdAt)}
                </td>
                <td className="px-6 py-4">**to add in db**</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicantApplications;
