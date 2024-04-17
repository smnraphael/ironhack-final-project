import { Link } from "react-router-dom";
import useAuth from "../context/useAuth";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center p-2 bg-blue-50">
      <p>IT-Recruitment</p>
      <div className="flex gap-3 items-center">
        <Link to={"/"}>Jobs</Link>
        {isLoggedIn ? (
          <>
            <button onClick={logout} className="bg-blue-200 p-2 rounded-lg">
              Log out
            </button>
          </>
        ) : (
          <>
            <Link to={"/user/login"}>Log In</Link>
            <Link to={"/user/signup"}>Sign Up</Link>
            <Link to={"/company/login"} className="bg-blue-200 p-2 rounded-lg">
              Company Portal
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
