const CompanySignup = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <h1>Sign Up as a company</h1>
      <form className="flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col items-start">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@example.com"
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••••••"
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="name">Company Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="headquarters">Headquarters (optional)</label>
          <input
            type="text"
            id="headquarters"
            name="headquarters"
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="numberOfEmployees">
            Number of Employees (optional)
          </label>
          <input
            type="number"
            id="numberOfEmployees"
            name="numberOfEmployees"
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="website">Website (optional)</label>
          <input
            type="url"
            id="website"
            name="website"
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="description">Description (optional)</label>
          <textarea
            id="description"
            name="description"
            className="border rounded-lg p-2"
          ></textarea>
        </div>
        <div>
          <button type="submit" className="bg-blue-200 rounded-lg p-2">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanySignup;
