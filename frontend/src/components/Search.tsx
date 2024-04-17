const Search = () => {
  return (
    <div className="flex gap-3">
      <div className="w-10/12">
        <label htmlFor="search">
          <input
            name="search"
            id="search"
            type="text"
            placeholder="Search"
            className="bg-l-light p-2 rounded-lg w-full"
          />
        </label>
      </div>
      <button className="bg-l-contrast text-l-light p-2 rounded-lg">
        Find Job
      </button>
    </div>
  );
};

export default Search;
