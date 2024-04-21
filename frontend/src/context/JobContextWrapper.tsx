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

type Jobs = Job[];

type JobContextType = {
  jobs: Jobs | null;
  setJobs: Dispatch<SetStateAction<Jobs | null>>;
  employmentType: string[];
  setEmploymentType: Dispatch<SetStateAction<string[]>>;
  workLevel: string[];
  setWorkLevel: Dispatch<SetStateAction<string[]>>;
  remote: string[];
  setRemote: Dispatch<SetStateAction<string[]>>;
  fetchJobs: () => void;
};

export const JobContext = createContext<JobContextType>({
  jobs: null,
  setJobs: () => {},
  employmentType: [],
  setEmploymentType: () => {},
  workLevel: [],
  setWorkLevel: () => {},
  remote: [],
  setRemote: () => {},
  fetchJobs: () => {},
});

type ContextWrapperProps = {
  children: ReactNode;
};

function JobContextWrapper({ children }: ContextWrapperProps) {
  const [jobs, setJobs] = useState<Jobs | null>(null);
  const [employmentType, setEmploymentType] = useState<string[]>([]);
  const [workLevel, setWorkLevel] = useState<string[]>([]);
  const [remote, setRemote] = useState<string[]>([]);

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
        employmentType,
        setEmploymentType,
        workLevel,
        setWorkLevel,
        remote,
        setRemote,
        fetchJobs,
      }}
    >
      {children}
    </JobContext.Provider>
  );
}

export default JobContextWrapper;
