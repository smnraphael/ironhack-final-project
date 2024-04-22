import { Link } from "react-router-dom";
import useAuth from "../context/useAuth";
import Avatar from "./Avatar";

const Navbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className="flex items-center border-gray-200 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 h-20">
      <div className="flex flex-wrap items-center justify-between py-3 px-4 md:px-10 lg:px-20 w-full">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <h1 className="text-2xl font-bold whitespace-nowrap hover:text-blue-700 dark:text-white dark:hover:text-blue-500">
            IT-Recruitment
          </h1>
        </a>

        <div className="block w-auto">
          {isLoggedIn ? (
            <Avatar />
          ) : (
            <Link
              to={"/applicants/login"}
              className="py-2 px-3 dark:text-white hover:underline"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
