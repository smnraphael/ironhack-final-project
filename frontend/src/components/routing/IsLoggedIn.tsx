import useAuth from "../../context/useAuth";
import { Navigate, Outlet } from "react-router-dom";

function IsLoggedIn() {
  const { user, isLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    return <p>Loading :)</p>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export default IsLoggedIn;
