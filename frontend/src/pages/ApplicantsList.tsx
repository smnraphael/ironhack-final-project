import { useEffect, useState } from "react";
import api from "../service/api";
import { useParams, Link } from "react-router-dom";

type Application = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  socialNetwork: string;
  resume: string;
  coverLetter: string;
  applicant: string;
  jobOffer: string;
  createdAt: Date;
};

const ApplicantsList = () => {
  const [applications, setApplications] = useState<Application[]>([]);

  const { jobOfferId } = useParams();

  const fetchApplications = async () => {
    try {
      const { data } = await api.get(`/joboffers/${jobOfferId}/applications`);
      data.sort(
        (a: Application, b: Application) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setApplications(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div>
      <table>
        <thead className="bg-l-mid">
          <tr>
            <th>Applicant</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application._id}>
              <td>
                {application.firstName} {application.lastName}
              </td>
              <td>
                <Link to={`/job-offer/${application.jobOffer}`}>→</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicantsList;
