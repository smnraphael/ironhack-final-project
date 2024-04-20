// import useJob from "../context/useJob";

const Sort = () => {
  // const { jobs, setJobs } = useJob();

  // const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const sortOption = e.currentTarget.value;

  //   if (jobs) {
  //     setJobs((prevJobs) => {
  //       let sortedJobs = [...prevJobs];

  //       if (sortOption === "newest") {
  //         sortedJobs.sort(
  //           (a, b) =>
  //             new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  //         );
  //       } else if (sortOption === "oldest") {
  //         sortedJobs.sort(
  //           (a, b) =>
  //             new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  //         );
  //       }

  //       return sortedJobs;
  //     });
  //   }
  // };

  return (
    <form className="flex items-center">
      <label
        htmlFor="sortSelect"
        className="font-semibold text-gray-900 dark:text-white mr-2"
      >
        Sort by
      </label>
      <select
        id="sortSelect"
        name="sortSelect"
        // onChange={handleSort}
        className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-orange-500 dark:focus:border-orange-500"
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
    </form>
  );
};

export default Sort;
