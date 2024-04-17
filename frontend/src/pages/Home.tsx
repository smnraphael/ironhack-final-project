import api from "../service/api";
import Search from "../components/Search";
import Filters from "../components/Filters";
import Sort from "../components/Sort";
import JobCard from "../components/JobCard";
import { useEffect, useState } from "react";

const Home = () => {
  const [jobs, setJobs] = useState([]);

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
    <div className="px-20 py-5">
      <Search />
      <div className="flex">
        <Filters />
        <div>
          <Sort />
          <div className="grid grid-cols-3 gap-2">
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
