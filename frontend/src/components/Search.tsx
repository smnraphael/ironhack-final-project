import { useState } from "react";
import { AxiosError } from "axios";
import useJob from "../context/useJob";
import api from "../service/api";

const Search = () => {
  const [search, setSearch] = useState("");

  const { setJobs } = useJob();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearch(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await api.get(`/joboffers?position=${search}`);
      console.log(response);
      setJobs(response.data);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.log(error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-evenly">
        <div className="w-10/12">
          <label htmlFor="search">
            <input
              name="search"
              id="search"
              type="text"
              placeholder="Search"
              value={search}
              onChange={handleChange}
              className="bg-l-light dark:bg-d-mid p-2 rounded-lg border w-full"
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-l-contrast dark:bg-d-contrast text-l-light font-bold px-3 py-2 rounded-lg"
        >
          Find Job
        </button>
      </div>
    </form>
  );
};

export default Search;
