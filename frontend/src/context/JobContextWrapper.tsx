import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

import api from "../service/api.ts";

type Job = {
  _id: string;
  company: {
    _id: string;
    image: string;
  };
  position: string;
  positionOverview: string;
  employmentType: string;
  remote: boolean;
  salary: number;
  createdAt: Date;
};

type Jobs = Job[];

type JobContextType = {
  jobs: Jobs | null;
  setJobs: Dispatch<SetStateAction<Jobs | null>>;
  fetchJobs: () => void;
};

export const JobContext = createContext<JobContextType>({
  jobs: null,
  setJobs: () => {},
  fetchJobs: () => {},
});

type ContextWrapperProps = {
  children: ReactNode;
};

function JobContextWrapper({ children }: ContextWrapperProps) {
  const [jobs, setJobs] = useState<Jobs | null>(null);

  const fetchJobs = async () => {
    try {
      const { data } = await api.get("/joboffers");
      data.sort(
        (a: Job, b: Job) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setJobs(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        setJobs,

        fetchJobs,
      }}
    >
      {children}
    </JobContext.Provider>
  );
}

export default JobContextWrapper;
