const Search = () => {
  return (
    <div className="flex justify-evenly">
      <div className="w-10/12">
        <label htmlFor="search">
          <input
            name="search"
            id="search"
            type="text"
            placeholder="Search"
            className="bg-l-light dark:bg-d-mid p-2 rounded-lg w-full"
          />
        </label>
      </div>
      <button className="bg-l-contrast dark:bg-d-contrast text-l-light font-bold px-3 py-2 rounded-lg">
        Find Job
      </button>
    </div>
  );
};

export default Search;
