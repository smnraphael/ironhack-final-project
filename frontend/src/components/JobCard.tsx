import { Link } from "react-router-dom";

type Job = {
  _id: string;
  company: {
    _id: string;
    name: string;
  };
  position: string;
  positionOverview: string;
  employmentType: string;
  remote: boolean;
  salary: number;
};

const JobCard: React.FC<{ job: Job }> = ({ job }) => {
  return (
    <div className="flex flex-col gap-2 justify-between p-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col gap-1">
        <p className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {job.position}
        </p>
        <Link to={`/company/profile/${job.company._id}`}>
          <p className="text-sm font-medium text-blue-600 hover:underline dark:text-orange-500">
            {job.company.name}
          </p>
        </Link>

        <p className="text-sm text-gray-700 dark:text-gray-400">
          {job.positionOverview}
        </p>
      </div>
      <div className="flex flex-col gap-4 items-start">
        <div className="flex flex-wrap gap-1">
          <p className="text-sm bg-gray-200 dark:bg-gray-600 dark:text-gray-100 rounded-xl px-2">
            {job.employmentType}
          </p>
          <p className="text-sm bg-gray-200 dark:bg-gray-600 dark:text-gray-100 rounded-xl px-2">
            {job.remote}
          </p>
          <p className="text-sm bg-gray-200 dark:bg-gray-600 dark:text-gray-100 rounded-xl px-2">
            ${job.salary}
          </p>
        </div>
        <Link
          to={`/job-offers/${job._id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
