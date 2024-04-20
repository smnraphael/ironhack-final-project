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
    <div>
      <Search />
      <div className="flex justify-evenly">
        <Filters />
        <div className="w-max md:w-9/12">
          <TopJobOffers />
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {jobs && jobs.map((job) => <JobCard key={job._id} job={job} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
