import { Link } from "react-router-dom";
import useAuth from "../context/useAuth";

const ApplicantPrivateProfile = () => {
  const { user } = useAuth();
  return (
    <div className="px-20 py-5 text-d-dark dark:bg-d-dark dark:text-l-light">
      {user?.__t === "Applicant" && (
        <>
          <img
            src={user.image}
            alt={user.firstName}
            className="h-36 rounded-lg"
          />
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
          <p>{user.email}</p>
          <Link
            to="/user/applications"
            className="bg-l-contrast dark:bg-d-contrast text-l-light font-bold px-3 py-2 rounded-lg"
          >
            See all my applications
          </Link>
        </>
      )}
    </div>
  );
};

export default ApplicantPrivateProfile;
