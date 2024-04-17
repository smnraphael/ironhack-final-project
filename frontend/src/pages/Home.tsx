import api from "../service/api";
import Search from "../components/Search";
import Filters from "../components/Filters";
import JobCard from "../components/JobCard";
import { useEffect, useState } from "react";
import TopJobOffers from "../components/TopJobOffers";

type Jobs = {
  _id: string;
  company: {
    _id: string;
    logo: string;
  };
  position: string;
  positionOverview: string;
  employmentType: string;
  remote: boolean;
  salary: number;
};

const Home = () => {
  const [jobs, setJobs] = useState<Jobs[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await api.get("/joboffers");
        setJobs(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="px-20 py-5 text-d-dark dark:bg-d-dark dark:text-l-light">
      <Search />
      <div className="flex">
        <Filters />
        <div className="w-9/12">
          <TopJobOffers />
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
            {jobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
