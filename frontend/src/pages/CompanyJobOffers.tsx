import { useEffect, useState } from "react";
import api from "../service/api";
import { useParams } from "react-router-dom";

type Job = {
  _id: string;
  oneCompany: {
    _id: string;
    name: string;
    logo: string;
  };
  jobOffers: {
    _id: string;
    position: string;
  }[];
  position: string;
  positionOverview: string;
  employmentType: string;
  remote: boolean;
  salary: number;
  createdAt: Date;
};

const CompanyJobOffers = () => {
  const [companyJobs, setCompanyJobs] = useState<Job | null>(null);

  const { companyId } = useParams();

  const fetchCompanyJobs = async () => {
    try {
      const { data } = await api.get(`/companies/profile/${companyId}`);
      setCompanyJobs(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCompanyJobs();
  }, []);

  if (!companyJobs) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-20 py-5 text-d-dark dark:bg-d-dark dark:text-l-light">
      <img
        src={companyJobs.oneCompany.logo}
        alt={companyJobs.oneCompany.name}
        className="h-36 rounded-lg"
      />
      <h2 className="text-3xl font-bold">{companyJobs.oneCompany.name}</h2>
      <table>
        <thead className="bg-l-mid">
          <tr>
            <th>Position</th>
            <th>Number of Applicants</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {companyJobs.jobOffers.map((offer) => (
            <tr key={offer._id}>
              <td>{offer.position}</td>
              <td>Number of Applicants</td>
              <td>→</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyJobOffers;
