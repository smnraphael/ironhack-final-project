import useAuth from "../context/useAuth";

const ApplicantProfile = () => {
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
        </>
      )}
    </div>
  );
};

export default ApplicantProfile;
