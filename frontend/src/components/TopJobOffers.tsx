import Sort from "./Sort";
import useJob from "../context/useJob";

const TopJobOffers = () => {
  const { jobs } = useJob();

  const jobCount = jobs ? jobs.length : 0;

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

export default TopJobOffers;
