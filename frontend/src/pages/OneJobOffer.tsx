import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../service/api";
import useAuth from "../context/useAuth";

type Job = {
  _id: string;
  position: string;
  location: string;
  employmentType: string;
  experience: number;
  workLevel: string;
  remote: boolean;
  salary: number;
  companyOverview: string;
  positionOverview: string;
  keyResponsibilities: string;
  company: {
    _id: string;
    image: string;
  };
};

const OneJobOffer = () => {
  const [job, setJob] = useState<Job | null>(null);

  const { isLoggedIn } = useAuth();
  const { jobOfferId } = useParams();

  useEffect(() => {
    const fetchOneJob = async () => {
      try {
        const { data } = await api.get(`/joboffers/${jobOfferId}`);
        setJob(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOneJob();
  }, [jobOfferId]);

  return (
    <div className="px-56 py-5">
      {job && (
        <div className="flex flex-col gap-5">
          <div>
            <Link to={`/company/profile/${job.company._id}`}>
              <img
                src={job.company.image}
                alt={job.company._id}
                className="h-10"
              />
            </Link>
          </div>
          <p className="text-3xl font-bold">{job.position}</p>
          <p className="text-sm">{job.location}</p>
          <div className="grid grid-cols-5 self-center gap-5 border rounded-lg p-5">
            <div className="flex flex-col items-center">
              <p className="font-bold">Employment Type</p>
              <p>{job.employmentType}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold">Experience</p>
              <p>{job.experience} years</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold">Work Level</p>
              <p>{job.workLevel}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold">Remote</p>
              <p>{job.remote ? "Remote" : "On-site"}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold">Salary</p>
              <p>${job.salary}</p>
            </div>
          </div>
          <div>
            <p className="text-md font-bold">Company Overview</p>
            <p>{job.companyOverview}</p>
          </div>
          <div>
            <p className="text-md font-bold">Position Overview</p>
            <p>{job.positionOverview}</p>
          </div>
          <div>
            <p className="text-md font-bold">Key Responsibilities</p>
            <p>{job.keyResponsibilities}</p>
          </div>
          {isLoggedIn ? (
            <Link
              to={`/job-offers/${jobOfferId}/application`}
              className="bg-l-contrast text-l-light py-2 px-5 rounded-full self-center"
            >
              Apply Now
            </Link>
          ) : (
            <Link
              to="/user/login"
              className="bg-l-contrast text-l-light py-2 px-5 rounded-full self-center"
            >
              Apply Now
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default OneJobOffer;
