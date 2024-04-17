import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../service/api";

const OneJobOffer = () => {
  const [job, setJob] = useState(null);

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
    <div className="px-20 py-5">
      {job && (
        <div className="flex flex-col gap-5">
          <p className="text-3xl font-bold">{job.position}</p>
          <p className="text-sm">{job.location}</p>
          <div className="flex self-center">
            <div className="flex flex-col">
              <p>Employment Type</p>
              <p>{job.employmentType}</p>
            </div>
            <div className="flex flex-col">
              <p>Experience</p>
              <p>{job.experience} years of experience</p>
            </div>
            <div className="flex flex-col">
              <p>Work Level</p>
              <p>{job.workLevel}</p>
            </div>
            <div className="flex flex-col">
              <p>Remote</p>
              <p>{job.remote ? "Remote" : "On-site"}</p>
            </div>
            <div className="flex flex-col">
              <p>Salary</p>
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
          <button className="bg-l-contrast text-l-light py-2 px-5 rounded-full self-center">
            Apply Now
          </button>
        </div>
      )}
    </div>
  );
};

export default OneJobOffer;
