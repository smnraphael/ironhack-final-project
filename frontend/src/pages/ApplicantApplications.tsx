import { useEffect, useState } from "react";
import api from "../service/api";

type Application = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  socialNetwork: string;
  resume: string;
  coverLetter: string;
  jobOffer: {
    position: string;
  };
};

const ApplicantApplications = () => {
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const { data } = await api.get(`/applicants/applications`);
        setApplications(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApplications();
  }, []);

  return (
    <div>
      <p>Applications</p>
      {applications.map((application) => (
        <div key={application._id}>
          <p>{application.jobOffer.position}</p>
        </div>
      ))}
    </div>
  );
};

export default ApplicantApplications;
