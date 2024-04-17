import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../service/api";
import JobCard from "../components/JobCard";

type Job = {
  _id: string;
  company: {
    _id: string;
    logo: string;
  };
  position: string;
  positionOverview: string;
  employmentType: string;
  remote: boolean;
};

type Company = {
  oneCompany: {
    name: string;
    logo: string;
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
    <div className="px-20 py-5">
      {company && (
        <div className="flex flex-col">
          <div>
            <img
              src={company.oneCompany.logo}
              alt={company.oneCompany.name}
              className="h-10"
            />
            <p className="text-3xl font-bold">{company.oneCompany.name}</p>
            <p>Description: {company.oneCompany.description}</p>
            <p>Headquarters: {company.oneCompany.headquarters}</p>
            <p>Number of employees: {company.oneCompany.numberOfEmployees}</p>
            <p>Job Offers posted by {company.oneCompany.name}:</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {company.jobOffers.map((jobOffer) => (
              <JobCard key={jobOffer._id} job={jobOffer} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyProfile;
