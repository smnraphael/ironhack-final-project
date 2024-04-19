import { Link, Navigate } from "react-router-dom";
import useAuth from "../context/useAuth";

const CompanyPrivateProfile = () => {
  const { user } = useAuth();
  if (!user || user.__t === "Applicant") {
    return <Navigate to="/" />;
  }

  return (
    <div className="px-20 py-5 text-d-dark dark:bg-d-dark dark:text-l-light">
      {company && (
        <>
          <img
            src={company.logo}
            alt={company.name}
            className="h-36 rounded-lg"
          />
          <p className="text-3xl font-bold">{company.name}</p>
          <p>Email</p>
          <p>{company.email}</p>
          <p>Headquarters</p>
          <p>{company.headquarters}</p>
          <p>Number of Employees</p>
          <p>{company.numberOfEmployees}</p>
          <p>Website</p>
          <p>{company.website}</p>
          <p>Description</p>
          <p>{company.description}</p>

          <button className="bg-l-contrast dark:bg-d-contrast text-l-light font-bold px-3 py-2 rounded-lg">
            EDIT PROFILE
          </button>

          <Link
            to={`/company/new-job-offer`}
            className="bg-l-contrast dark:bg-d-contrast text-l-light font-bold px-3 py-2 rounded-lg"
          >
            Post job offer
          </Link>

          <Link
            to={`/company/private-profile/${company._id}/job-offers`}
            className="bg-l-contrast dark:bg-d-contrast text-l-light font-bold px-3 py-2 rounded-lg"
          >
            See all job offers
          </Link>
        </>
      )}
    </div>
  );
};

export default CompanyPrivateProfile;
