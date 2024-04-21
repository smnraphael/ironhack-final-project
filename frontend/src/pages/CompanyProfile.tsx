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
      <div className="flex flex-col items-start gap-5 justify-between p-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-600">
        {company && (
          <div className="flex flex-col gap-5">
            <div>
              <img
                src={company.company.image}
                alt={company.company.name}
                className="h-16 rounded-lg"
              />
            </div>

            <p className="text-3xl font-bold dark:text-white">
              {company.company.name}
            </p>
            {company.company.description ? (
              <p className="text-sm text-gray-700 dark:text-gray-400">
                {company.company.description.split("\n").map((item, index) => (
                  <React.Fragment key={index}>
                    {item}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            ) : null}
            <p className="text-sm font-medium dark:text-white">
              Headquarters:{" "}
              {company.company.headquarters ? (
                <span className="font-normal text-gray-700 dark:text-gray-400">
                  {company.company.headquarters}
                </span>
              ) : (
                <span className="font-normal text-gray-700 dark:text-gray-400">
                  N/A
                </span>
              )}
            </p>
            <p className="text-sm font-medium dark:text-white">
              Number of employees:{" "}
              {company.company.numberOfEmployees ? (
                <span className="font-normal text-gray-700 dark:text-gray-400">
                  {company.company.numberOfEmployees}
                </span>
              ) : (
                <span className="font-normal text-gray-700 dark:text-gray-400">
                  N/A
                </span>
              )}
            </p>
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
