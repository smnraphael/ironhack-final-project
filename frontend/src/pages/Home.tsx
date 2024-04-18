import Search from "../components/Search";
import Filters from "../components/Filters";
import JobCard from "../components/JobCard";
import { useEffect } from "react";
import TopJobOffers from "../components/TopJobOffers";
import useJob from "../context/useJob";

const Home = () => {
  const { jobs, setJobs, fetchJobs } = useJob();

  useEffect(() => {
    fetchJobs();
  }, [setJobs]);

  return (
    <div className="px-20 py-5 text-d-dark dark:bg-d-dark dark:text-l-light">
      <Search />
      <div className="flex">
        <Filters />
        <div className="w-9/12">
          <TopJobOffers />
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
            {jobs && jobs.map((job) => <JobCard key={job._id} job={job} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
