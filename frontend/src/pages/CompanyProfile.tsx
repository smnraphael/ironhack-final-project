import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../service/api";
import JobCard from "../components/JobCard";

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
};

type Company = {
  company: {
    name: string;
    image: string;
    description: string;
    website: string;
    headquarters: string;
    numberOfEmployees: number;
  };
  jobOffers: Job[];
};

const CompanyProfile = () => {
  const [company, setCompany] = useState<Company | null>(null);

  const { companyId } = useParams();

  useEffect(() => {
    const fetchOneCompany = async () => {
      try {
        const { data } = await api.get(`/companies/profile/${companyId}`);
        setCompany(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOneCompany();
  }, [companyId]);

  console.log(company?.jobOffers);

  return (
    <div className="flex flex-col gap-5">
      <a href="/" className="self-start">
        <p className="text-xs font-medium dark:text-white hover:underline hover:text-blue-600  dark:hover:text-blue-500">
          Back to job offers
        </p>
      </a>
      <h1 className="text-xl font-bold dark:text-white">Company Profile</h1>
      <div className="flex flex-col items-center sm:items-start gap-5 justify-between p-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-600">
        {company && (
          <div className="flex flex-col justify-between sm:flex-row w-full gap-5">
            <div className="flex flex-row gap-5 sm:w-fit">
              <img
                src={company.company.image}
                alt={company.company.name}
                className="h-20 rounded-lg"
              />

              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold dark:text-white">
                  {company.company.name}
                </p>

                <a
                  href={company.company.website}
                  target="_blank"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                >
                  {company.company.website}
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-5 sm:w-7/12">
              <div className="flex flex-col gap-2">
                <p className="font-semibold dark:text-white">Description:</p>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  {company.company.description &&
                    company.company.description
                      .split("\n")
                      .map((item, index) => (
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
                  {company.company.headquarters}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold dark:text-white">
                  Number of employees:
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  {company.company.numberOfEmployees}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold dark:text-white ml-2">
          Job offers posted by {company?.company.name}:
        </p>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
          {company?.jobOffers.map((jobOffer) => (
            <JobCard key={jobOffer._id} job={jobOffer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
