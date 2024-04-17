import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="h-90 bg-l-light rounded-lg p-2 flex flex-col justify-between items-start">
      <Link to={`/company/profile/${job.company}`}>
        <p>Placeholder for company logo</p>
      </Link>
      <p>{job.position}</p>
      <p>{job.positionOverview}</p>
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
