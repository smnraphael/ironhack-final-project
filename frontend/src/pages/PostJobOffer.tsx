const PostJobOffer = () => {
  return (
    <div>
      <form className="flex flex-col justify-center items-center gap-2">
        <h1>Create a new Job Offer</h1>
        <div className="flex flex-col">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            name="position"
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div>
          <label htmlFor="employmentType">Employment Type</label>
          <select
            id="employmentType"
            name="employmentType"
            required
            className="border rounded-lg p-2 flex flex-col"
          >
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="salary">Salary</label>
          <input
            type="number"
            id="salary"
            name="salary"
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div>
          <label htmlFor="remote">Remote</label>
          <select
            id="remote"
            name="remote"
            required
            className="border rounded-lg p-2 flex flex-col"
          >
            <option value="On Site">On Site</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Remote">Remote</option>
          </select>
        </div>
        <div>
          <button type="submit" className="bg-blue-200 rounded-lg p-2">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostJobOffer;
