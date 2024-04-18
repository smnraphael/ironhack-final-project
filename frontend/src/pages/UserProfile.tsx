import useAuth from "../context/useAuth";

const UserProfile = () => {
  const { user } = useAuth();
  return (
    <div className="px-20 py-5 text-d-dark dark:bg-d-dark dark:text-l-light">
      {user && (
        <>
          <img
            src={user.avatar}
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

export default UserProfile;
