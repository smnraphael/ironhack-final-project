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
    <nav className="flex justify-between items-center px-10 py-2 bg-l-light text-d-dark dark:bg-d-mid dark:text-l-light">
      <Link
        to={"/"}
        className="text-2xl font-extrabold text-l-contrast dark:text-d-contrast"
      >
        IT-Recruitment
      </Link>
      <div className="flex gap-5 items-center">
        {isLoggedIn ? (
          <>
            <Link to={`/${userType}/private-profile`}>
              <img src={user?.image} className="h-8 rounded-xl" />
            </Link>
            <button
              onClick={logout}
              className="bg-l-mid dark:bg-d-light font-medium p-2 rounded-lg"
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <Link to={"/user/login"} className="font-medium">
              Log In
            </Link>
            <Link
              to={"/company/login"}
              className="bg-l-mid dark:bg-d-light font-medium p-2 rounded-lg"
            >
              Company Portal
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
