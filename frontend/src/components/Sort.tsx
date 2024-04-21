import useJob from "../context/useJob";

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

const Sort = () => {
  const { jobs, setJobs } = useJob();

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortOption = e.currentTarget.value;

    if (jobs) {
      setJobs((prevJobs) => {
        let sortedJobs = [...(prevJobs as Job[])];

        if (sortOption === "newest") {
          sortedJobs.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        } else if (sortOption === "oldest") {
          sortedJobs.sort(
            (a, b) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        }

        return sortedJobs;
      });
    }
  };

  return (
    <form className="hidden sm:flex items-center">
      <label
        htmlFor="sortSelect"
        className="font-semibold text-gray-900 dark:text-white mr-2"
      >
        Sort by
      </label>
      <select
        id="sortSelect"
        name="sortSelect"
        onChange={handleSort}
        className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg py-1 px-2 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300"
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
    </form>
  );
};

export default Sort;
