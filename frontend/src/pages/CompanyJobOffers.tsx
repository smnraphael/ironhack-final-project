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
  }[];
};

const CompanyJobOffers = () => {
  const [companyJobs, setCompanyJobs] = useState<Job | null>(null);

  const { user } = useAuth();

  const fetchCompanyJobs = async () => {
    try {
      const { data } = await api.get(`/companies/profile/${user?._id}`);
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
        src={companyJobs.company.image}
        alt={companyJobs.company.name}
        className="h-36 rounded-lg"
      />
      <h2 className="text-3xl font-bold">{companyJobs.company.name}</h2>
      <table>
        <thead className="bg-l-mid">
          <tr>
            <th>Position</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {companyJobs.jobOffers.map((offer) => (
            <tr key={offer._id}>
              <td>{offer.position}</td>
              <td>
                <Link to={`/job-offer/${offer._id}`}>→</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyJobOffers;
