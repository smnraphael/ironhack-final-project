import { Link } from "react-router-dom";
import useAuth from "../context/useAuth";

const Navbar = () => {
  const { user, isLoggedIn, logout } = useAuth();

  let userType;
  if (user?.__t === "Company") {
    userType = "companies";
  } else if (user?.__t === "Applicant") {
    userType = "applicants";
  }

  return (
    <nav className="border-gray-200 bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between py-3 px-4 md:px-10 lg:px-20">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <h1 className="text-2xl font-bold whitespace-nowrap hover:text-blue-700 dark:text-white dark:hover:text-blue-500">
            IT-Recruitment
          </h1>
        </a>
        <div className="block w-auto">
          {isLoggedIn ? (
            <div className="flex gap-1 items-center sm:gap-2">
              <Link to={`/${userType}/profile`}>
                <img src={user?.image} className="h-10 rounded-full" />
              </Link>

              <button
                onClick={logout}
                className="py-2 px-3 font-medium text-blue-700 dark:text-blue-500 hover:underline"
              >
                Log out
              </button>
            </div>
          ) : (
            <div className="flex items-center">
              <Link
                to={"/applicants/login"}
                className="py-2 px-3 dark:text-white hover:underline"
              >
                Log In
              </Link>
              <Link
                to={"/companies/login"}
                className="py-2 px-3 font-medium text-blue-700 dark:text-blue-500 hover:underline"
              >
                Company Portal
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
