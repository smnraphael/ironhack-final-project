import Search from "../components/Search";
import Filters from "../components/Filters";
import JobCard from "../components/JobCard";
import { useEffect } from "react";
import TopJobOffers from "../components/TopJobOffers";
import useJob from "../context/useJob";

const Home = () => {
  const { jobs, setJobs, employmentType, workLevel, remote, fetchJobs } =
    useJob();

  useEffect(() => {
    fetchJobs();
  }, [setJobs]);

  let displayedJobs;

  if (employmentType || workLevel || remote) {
    displayedJobs = jobs?.filter((job) => {
      // Check if the job's employment type matches any of the selected types
      const employmentTypeMatch =
        employmentType.length === 0 ||
        employmentType.includes(job.employmentType);
      const workLevelMatch =
        workLevel.length === 0 || workLevel.includes(job.workLevel);
      const remoteMatch = remote.length === 0 || remote.includes(job.remote);
      return employmentTypeMatch && workLevelMatch && remoteMatch;
    });
  } else {
    displayedJobs = jobs;
  }

  return (
    <div>
      <Search />
      <div className="flex gap-5 justify-between">
        <Filters />
        <div className="w-max md:w-10/12 lg:9/12">
          <TopJobOffers displayedJobs={displayedJobs} />
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {displayedJobs?.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
