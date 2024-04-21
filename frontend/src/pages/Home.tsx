import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Search from "../components/Search";
import Filters from "../components/Filters";
import JobCard from "../components/JobCard";
import TopJobOffers from "../components/TopJobOffers";
import useJob from "../context/useJob";

const Home = () => {
  const {
    jobs,
    displayedJobs,
    setDisplayedJobs,
    employmentType,
    workLevel,
    remote,
    fetchJobs,
  } = useJob();

  const location = useLocation();

  useEffect(() => {
    fetchJobs();
  }, []);

  const filterJobs = () => {
    return (
      jobs?.filter((job) => {
        const employmentTypeMatch =
          !employmentType.length || employmentType.includes(job.employmentType);
        const workLevelMatch =
          !workLevel.length || workLevel.includes(job.workLevel);
        const remoteMatch = !remote.length || remote.includes(job.remote);
        return employmentTypeMatch && workLevelMatch && remoteMatch;
      }) || []
    );
  };

  useEffect(() => {
    setDisplayedJobs(filterJobs());
  }, [location.pathname, employmentType, workLevel, remote, jobs]);

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
