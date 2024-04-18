import { useContext } from "react";
import { JobContext } from "./JobContextWrapper";
const useJob = () => useContext(JobContext);

export default useJob;
