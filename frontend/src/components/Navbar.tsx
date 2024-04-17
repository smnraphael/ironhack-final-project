import { useParams, Link } from "react-router-dom";
import useAuth from "../context/useAuth";

const Navbar = () => {
  const { user, company, isLoggedIn, logout } = useAuth();

  const { currentId } = useParams();

  return (
    <nav className="flex justify-between items-center px-10 py-2 bg-l-light">
      <Link to={"/"} className="text-2xl font-bold text-l-contrast">
        IT-Recruitment
      </Link>
      <div className="flex gap-3 items-center">
        {isLoggedIn ? (
          <>
            {user ? (
              <>
                <Link to={`/user/profile/${currentId}`}>
                  <img
                    src={user.avatar}
                    alt={user.firstName}
                    className="h-10 rounded-full"
                  />
                </Link>
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
