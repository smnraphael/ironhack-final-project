import Sort from "./Sort";

const TopJobOffers = ({ displayedJobs }) => {
  displayedJobs = displayedJobs ? displayedJobs.length : 0;

  return (
    <div>
      <div className="h-6 w-full"></div>
      <div className="flex justify-between items-center pb-2">
        <div>
          <p className="text-2xl font-bold dark:text-white">
            Showing {displayedJobs} {displayedJobs === 1 ? "job" : "jobs"}
          </p>
        </div>
        <Sort />
      </div>
    </div>
  );
};

export default TopJobOffers;
