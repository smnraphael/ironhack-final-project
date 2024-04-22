import Sort from "./Sort";

type Job = {
  _id: string;
  company: {
    _id: string;
    image: string;
    name: string;
  };
  position: string;
  positionOverview: string;
  employmentType: string;
  workLevel: string;
  remote: string;
  salary: number;
  createdAt: Date;
};

type Props = {
  displayedJobs: Job[] | null;
};

const JobOffersHeader = ({ displayedJobs }: Props) => {
  const jobCount = displayedJobs ? displayedJobs.length : 0;

  return (
    <div>
      <div className="h-6 w-full"></div>
      <div className="flex justify-between items-center pb-2">
        <div>
          <p className="text-2xl font-bold dark:text-white">
            Showing {jobCount} {jobCount === 1 ? "job" : "jobs"}
          </p>
        </div>
        <Sort />
      </div>
    </div>
  );
};

export default JobOffersHeader;
