const UserSignup = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <h1>Sign Up</h1>
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
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="John"
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Doe"
            required
            className="border rounded-lg p-2"
          />
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

export default UserSignup;
