import { useEffect, useState } from "react";
import api from "../service/api";
import { useParams, Link } from "react-router-dom";

type Application = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  socialNetwork: string;
  resume: string;
  coverLetter: string;
  status: string;
  applicant: string;
  jobOffer: {
    _id: string;
    position: string;
  };
  createdAt: Date;
};

const ApplicantsList = () => {
  const [applications, setApplications] = useState<Application[]>([]);

  const { jobOfferId } = useParams();

  const fetchApplications = async () => {
    try {
      const { data } = await api.get(`/joboffers/${jobOfferId}/applications`);
      data.sort(
        (a: Application, b: Application) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setApplications(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString();
  };

  const updateApplicationStatus = async (applicationId: string) => {
    try {
      const applicationToUpdate = applications.find(
        (app) => app._id === applicationId
      );
      if (applicationToUpdate && applicationToUpdate.status === "Resume sent") {
        await api.patch(`/applications/${applicationId}`, {
          status: "Viewed by company",
        });
        setApplications((prevApplications) =>
          prevApplications.map((application) =>
            application._id === applicationId
              ? { ...application, status: "Viewed by company" }
              : application
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "Contacted by company":
        return "font-semibold text-green-700 dark:text-green-500";
      case "Application denied":
        return "font-semibold text-red-700 dark:text-red-500";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <Link to="/companies/job-offers" className="self-start">
        <p className="text-xs font-medium dark:text-white hover:underline hover:text-blue-600  dark:hover:text-blue-500">
          Back to job offers
        </p>
      </Link>
      <h1 className="text-xl font-bold dark:text-white">Applicants</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-800 dark:text-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3">
                Applicant
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3"></th>
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
                  <p>
                    {application.firstName} {application.lastName}
                  </p>
                </th>
                <td className="px-6 py-4">
                  {formatDate(application.createdAt)}
                </td>
                <td
                  className={`px-6 py-4 ${getStatusColor(application.status)}`}
                >
                  {application.status}
                </td>
                <td className="px-6 py-4">
                  <Link
                    to={`/companies/job-offers/${application.jobOffer._id}/applications/${application._id}`}
                    onClick={() => updateApplicationStatus(application._id)}
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicantsList;
