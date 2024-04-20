const Filters = () => {
  return (
    <div className="w-2/12 hidden md:block">
      <div className="h-6" />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <p className="font-semibold lg:text-md lg:font-bold dark:text-white">
            Type of Employment
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="Full-Time"
                name="Full-Time"
                value="Full-Time"
                className="w-4 h-4 text-blue-600 dark:text-blue-600 bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
              />
              <label
                htmlFor="Full-Time"
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Full-Time
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="Part-Time"
                name="Part-Time"
                value="Part-Time"
                className="w-4 h-4 text-blue-600 dark:text-blue-600 bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
              />
              <label
                htmlFor="Part-Time"
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Part-Time
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="Internship"
                name="Internship"
                value="Internship"
                className="w-4 h-4 text-blue-600 dark:text-blue-600 bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
              />
              <label
                htmlFor="Internship"
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Internship
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-semibold lg:text-md lg:font-bold dark:text-white">
            Seniority Level
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="Student Level"
                name="Student Level"
                className="w-4 h-4 text-blue-600 dark:text-blue-600 bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
              />
              <label
                htmlFor="Student Level"
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Student Level
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="Entry Level"
                name="Entry Level"
                className="w-4 h-4 text-blue-600 dark:text-blue-600 bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
              />
              <label
                htmlFor="Entry Level"
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Entry Level
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="Mid Level"
                name="Mid Level"
                className="w-4 h-4 text-blue-600 dark:text-blue-600 bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
              />
              <label
                htmlFor="Mid Level"
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Mid Level
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="Senior Level"
                name="Senior Level"
                className="w-4 h-4 text-blue-600 dark:text-blue-600 bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
              />
              <label
                htmlFor="Senior Level"
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Senior Level
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="Director Level"
                name="Director Level"
                className="w-4 h-4 text-blue-600 dark:text-blue-600 bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
              />
              <label
                htmlFor="Director Level"
                className="text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Director Level
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-semibold lg:text-md lg:font-bold dark:text-white">
            Remote
          </p>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="On Site"
              name="On Site"
              className="w-4 h-4 text-blue-600 dark:text-blue-600 bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
            />
            <label
              htmlFor="On Site"
              className="text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              On Site
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="Hybrid"
              name="Hybrid"
              className="w-4 h-4 text-blue-600 dark:text-blue-600 bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
            />
            <label
              htmlFor="Hybrid"
              className="text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Hybrid
            </label>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="Remote"
              name="Remote"
              className="w-4 h-4 text-blue-600 dark:text-blue-600 bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
            />
            <label
              htmlFor="Remote"
              className="text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remote
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
