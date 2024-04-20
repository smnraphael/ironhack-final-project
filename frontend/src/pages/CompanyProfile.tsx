import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../service/api";
import JobCard from "../components/JobCard";

type Job = {
  _id: string;
  company: {
    _id: string;
    image: string;
  };
  position: string;
  positionOverview: string;
  employmentType: string;
  remote: boolean;
  salary: number;
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
    <div className="px-20 py-5">
      {company && (
        <div className="flex flex-col">
          <div>
            <img
              src={company.company.image}
              alt={company.company.name}
              className="h-10"
            />
            <p className="text-3xl font-bold">{company.company.name}</p>
            <p>Description: {company.company.description}</p>
            <p>Headquarters: {company.company.headquarters}</p>
            <p>Number of employees: {company.company.numberOfEmployees}</p>
            <p>Job Offers posted by {company.company.name}:</p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
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
