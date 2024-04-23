import useJob from "../context/useJob";
import { useState, useEffect } from "react";

const Filters = () => {
  const {
    employmentType,
    setEmploymentType,
    workLevel,
    setWorkLevel,
    remote,
    setRemote,
  } = useJob();
  const [initialEmploymentType, setInitialEmploymentType] = useState<string[]>(
    []
  );
  const [initialWorkLevel, setInitialWorkLevel] = useState<string[]>([]);
  const [initialRemote, setInitialRemote] = useState<string[]>([]);

  useEffect(() => {
    setInitialEmploymentType(employmentType);
    setInitialWorkLevel(workLevel);
    setInitialRemote(remote);
  }, [employmentType, workLevel, remote]);

  const handleEmploymentTypeFilter = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isChecked = e.currentTarget.checked;
    const value = e.currentTarget.value;
    if (isChecked) {
      setEmploymentType((current) => {
        console.log("Adding employment type:", value);
        return [...current, value];
      });
    } else {
      setEmploymentType((current) => {
        console.log("Removing employment type:", value);
        return current.filter((type) => type !== value);
      });
    }
  };

  const handleWorkLevelFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked;
    const value = e.currentTarget.value;
    if (isChecked) {
      setWorkLevel((current) => {
        console.log("Adding work level:", value);
        return [...current, value];
      });
    } else {
      setWorkLevel((current) => {
        console.log("Removing work level:", value);
        return current.filter((type) => type !== value);
      });
    }
  };

  const handleRemoteFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.currentTarget.checked;
    const value = e.currentTarget.value;
    if (isChecked) {
      setRemote((current) => {
        console.log("Adding remote:", value);
        return [...current, value];
      });
    } else {
      setRemote((current) => {
        console.log("Removing remote:", value);
        return current.filter((type) => type !== value);
      });
    }
  };

  const handleResetFilters = () => {
    setEmploymentType([]);
    setWorkLevel([]);
    setRemote([]);
  };

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
                onChange={handleEmploymentTypeFilter}
                checked={initialEmploymentType.includes("Full-Time")}
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
                onChange={handleEmploymentTypeFilter}
                checked={initialEmploymentType.includes("Part-Time")}
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
                onChange={handleEmploymentTypeFilter}
                checked={initialEmploymentType.includes("Internship")}
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
                value="Student Level"
                onChange={handleWorkLevelFilter}
                checked={initialWorkLevel.includes("Student Level")}
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
                value="Entry Level"
                onChange={handleWorkLevelFilter}
                checked={initialWorkLevel.includes("Entry Level")}
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
                value="Mid Level"
                onChange={handleWorkLevelFilter}
                checked={initialWorkLevel.includes("Mid Level")}
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
                value="Senior Level"
                onChange={handleWorkLevelFilter}
                checked={initialWorkLevel.includes("Senior Level")}
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
                value="Director Level"
                onChange={handleWorkLevelFilter}
                checked={initialWorkLevel.includes("Director Level")}
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
              value="On Site"
              onChange={handleRemoteFilter}
              checked={initialRemote.includes("On Site")}
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
              value="Hybrid"
              onChange={handleRemoteFilter}
              checked={initialRemote.includes("Hybrid")}
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
              value="Remote"
              onChange={handleRemoteFilter}
              checked={initialRemote.includes("Remote")}
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
        <div>
          <button
            onClick={handleResetFilters}
            className="text-sm text-blue-600 font-medium hover:underline dark:text-blue-500"
          >
            Reset filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
