import React, { useEffect, useState } from "react";
import api from "../service/api";
import { Link, useParams } from "react-router-dom";

type Application = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  resume: string;
  coverLetter: string;
  socialNetwork: string;
  status: string;
};

const Application = () => {
  const [application, setApplication] = useState<Application | null>(null);

  const { applicationId } = useParams();

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const { data } = await api.get(`/applications/${applicationId}`);
        setApplication(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApplication();
  }, [applicationId]);

  const showDeclineButton = application?.status !== "Application denied";

  const updateApplicationStatus = async (applicationId: string | undefined) => {
    try {
      await api.patch(`/applications/${applicationId}`, {
        status: "Application denied",
      });
      setApplication((prevApplication) =>
        prevApplication
          ? { ...prevApplication, status: "Application denied" }
          : prevApplication
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleContactApplicant = async () => {
    try {
      await api.patch(`/applications/${applicationId}`, {
        status: "Contacted by company",
      });
      setApplication((prevApplication) =>
        prevApplication
          ? { ...prevApplication, status: "Contacted by company" }
          : prevApplication
      );
    } catch (error) {
      console.log(error);
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
      <div className="flex flex-col items-center sm:items-start gap-5 justify-between p-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-600">
        <div className="flex flex-col gap-3">
          <p className="text-xl font-semibold dark:text-white">
            {application?.lastName} {application?.firstName}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {application?.coverLetter.split("\n").map((item, index) => (
              <React.Fragment key={index}>
                {item}
                <br />
              </React.Fragment>
            ))}
          </p>
          <a href={application?.resume} target="_blank">
            Download resume
          </a>
          <div>
            <a
              href={application?.socialNetwork}
              target="_blank"
              className="text-sm text-blue-600 hover:underline"
            >
              {application?.socialNetwork}
            </a>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="flex justify-center gap-5">
            {showDeclineButton && (
              <form>
                <button
                  onClick={() => updateApplicationStatus(application?._id)}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300"
                >
                  Decline application
                </button>
              </form>
            )}

            <a
              href={`mailto: ${application?.email}`}
              onClick={handleContactApplicant}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Contact applicant
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
