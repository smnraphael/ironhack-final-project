import { Link } from "react-router-dom";

interface Job {
  _id: string;
  company: {
    _id: string;
    logo: string;
  };
  position: string;
  positionOverview: string;
  employmentType: string;
  remote: boolean;
}

const JobCard: React.FC<{ job: Job }> = ({ job }) => {
  return (
    <div className="h-90 bg-l-light rounded-lg p-2 flex flex-col justify-between items-start">
      <Link to={`/company/profile/${job.company._id}`}>
        <img
          src={job.company.logo}
          alt={job.company._id}
          className="h-10 rounded-xl"
        />
      </Link>
      <p className="text-xl font-bold">{job.position}</p>
      <p className="text-sm">{job.positionOverview}</p>
      <div className="flex flex-wrap gap-1">
        <p className="text-sm bg-l-mid rounded-full px-2">
          {job.employmentType}
        </p>
        <p className="text-sm bg-l-mid rounded-full px-2">{job.remote}</p>
      </div>
      <Link to={`/job-offers/${job._id}`}>
        <button className="bg-l-contrast text-l-light px-2 py-1 rounded-lg">
          Read more
        </button>
      </Link>
    </div>
  );
};

export default JobCard;