import { Link } from "react-router-dom";
import useAuth from "../context/useAuth";

const Navbar = () => {
  const { user, isLoggedIn, logout } = useAuth();

  let userType;
  if (user?.__t === "Company") {
    userType = "company";
  } else if (user?.__t === "Applicant") {
    userType = "applicant";
  }

  return (
    <nav className="border-gray-200 bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <h1 className="text-2xl font-bold whitespace-nowrap dark:text-white">
            IT-Recruitment
          </h1>
        </Link>
        <div className="block w-auto">
          {isLoggedIn ? (
            <div className="flex items-center gap-2">
              <Link to={`/${userType}/private-profile`}>
                <img src={user?.image} className="h-8 rounded-full" />
              </Link>

              <button
                onClick={logout}
                className="py-2 px-3 font-medium text-blue-700 dark:text-orange-500 hover:underline"
              >
                Log out
              </button>
            </div>
          ) : (
            <div className="flex items-center">
              <Link
                to={"/applicant/login"}
                className="py-2 px-3 dark:text-white hover:underline"
              >
                Log In
              </Link>
              <Link
                to={"/company/login"}
                className="py-2 px-3 font-medium text-blue-700 dark:text-orange-500 hover:underline"
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
