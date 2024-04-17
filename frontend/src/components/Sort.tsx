const Sort = () => {
  return (
    <div className="flex gap-2 items-center">
      <label htmlFor="sortSelect" className="font-medium">
        Sort by
      </label>
      <select
        id="sortSelect"
        name="sortSelect"
        className="bg-l-light pr-2 pl-1 py-1 rounded-lg border"
      >
        <option value="newest">Newest</option>
        <option value="latest">Oldest</option>
        <option value="latest">Most liked</option>
      </select>
    </div>
  );
};

export default Sort;
