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
    <div className="flex gap-2 items-center">
      <label htmlFor="sortSelect" className="font-medium">
        Sort by
      </label>
      <select
        id="sortSelect"
        name="sortSelect"
        // onChange={handleSort}
        className="bg-l-light pr-2 pl-1 py-1 rounded-lg border"
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
};

export default Sort;
