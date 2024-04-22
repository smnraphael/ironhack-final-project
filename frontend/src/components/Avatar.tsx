import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../context/useAuth";

const Avatar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { user, logout } = useAuth();

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const renderMenuItems = () => {
    if (user?.__t === "Company") {
      return (
        <>
          <Link
            to="/companies/profile"
            onClick={closeMenu}
            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Profile
          </Link>
          <Link
            to="/companies/job-offers"
            onClick={closeMenu}
            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Job Offers
          </Link>
        </>
      );
    } else if (user?.__t === "Applicant") {
      return (
        <>
          <Link
            to="/applicants/profile"
            onClick={closeMenu}
            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Profile
          </Link>
          <Link
            to="/applicants/applications"
            onClick={closeMenu}
            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Applications
          </Link>
        </>
      );
    }
  };

  return (
    <div className="relative inline-block text-left z-50">
      <button type="button" className="focus:outline-none" onClick={openMenu}>
        <img
          src={user?.image}
          className="h-10 w-10 object-cover mt-2 rounded-full"
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-6 w-48 bg-white border border-gray-200 rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-600">
          <div className="py-1">
            {renderMenuItems()}
            <a
              onClick={logout}
              className="block cursor-pointer px-4 py-2 text-md font-semibold text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Log out
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatar;
