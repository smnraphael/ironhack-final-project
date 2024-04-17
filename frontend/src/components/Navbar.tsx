import { Link } from "react-router-dom";
import useAuth from "../context/useAuth";

const Navbar = () => {
  const { user, company, isLoggedIn, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center p-2 bg-l-light">
      <p>IT-Recruitment</p>
      <div className="flex gap-3 items-center">
        <Link to={"/"}>Jobs</Link>
        {isLoggedIn ? (
          <>
            {user ? (
              <>
                <img
                  src={user.avatar}
                  alt={user.firstName}
                  className="h-10 rounded-full"
                />
                <button
                  onClick={logout}
                  className="bg-l-contrast text-l-light p-2 rounded-lg"
                >
                  Log out
                </button>
              </>
            ) : company ? (
              <>
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-10 rounded-full"
                />
                <button
                  onClick={logout}
                  className="bg-l-contrast text-l-light p-2 rounded-lg"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link to={"/user/login"}>Log In</Link>
                <Link to={"/user/signup"}>Sign Up</Link>
                <Link
                  to={"/company/login"}
                  className="bg-l-contrast text-l-light p-2 rounded-lg"
                >
                  Company Portal
                </Link>
              </>
            )}
          </>
        ) : (
          <>
            <Link to={"/user/login"}>Log In</Link>
            <Link to={"/user/signup"}>Sign Up</Link>
            <Link
              to={"/company/login"}
              className="bg-l-contrast text-l-light p-2 rounded-lg"
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
