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
        <>
          <p>{job.position}</p>
          <p>{job.location}</p>
          <p>{job.employmentType}</p>
          <p>{job.experience} years of experience</p>
          <p>{job.workLevel}</p>
          <p>{job.remote ? "Remote" : "On-site"}</p>
          <p>${job.salary}</p>
          <p>{job.companyOverview}</p>
          <p>{job.positionOverview}</p>
          <p>{job.keyResponsibilities}</p>
        </>
      )}
      <button className="bg-l-contrast text-l-light py-2 px-5 rounded-full">
        Apply Now
      </button>
    </div>
  );
};

export default OneJobOffer;
