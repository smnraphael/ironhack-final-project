const Filters = () => {
  return (
    <div className="w-3/12">
      <div className="h-5"></div>
      <div>
        <div>
          <p className="text-lg font-bold">Type of Employment</p>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="Full-Time"
              name="Full-Time"
              value="Full-Time"
            />
            <label htmlFor="Full-Time">Full-Time</label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="Part-Time"
              name="Part-Time"
              value="Part-Time"
            />
            <label htmlFor="Part-Time">Part-Time</label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="Internship"
              name="Internship"
              value="Internship"
            />
            <label htmlFor="Internship">Internship</label>
          </div>
        </div>
        <div>
          <p className="text-lg font-bold">Seniority Level</p>
          <div className="flex gap-2">
            <input type="checkbox" id="Student Level" name="Student Level" />
            <label htmlFor="Student Level">Student Level</label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" id="Entry Level" name="Entry Level" />
            <label htmlFor="Entry Level">Entry Level</label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" id="Mid Level" name="Mid Level" />
            <label htmlFor="Mid Level">Mid Level</label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" id="Senior Level" name="Senior Level" />
            <label htmlFor="Senior Level">Senior Level</label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" id="Director Level" name="Director Level" />
            <label htmlFor="Director Level">Director Level</label>
          </div>
        </div>
        <div>
          <p className="text-lg font-bold">Remote</p>
          <div className="flex gap-2">
            <input type="checkbox" id="On Site" name="On Site" />
            <label htmlFor="On Site">On Site</label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" id="Hybrid" name="Hybrid" />
            <label htmlFor="Hybrid">Hybrid</label>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" id="Remote" name="Remote" />
            <label htmlFor="Remote">Remote</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
