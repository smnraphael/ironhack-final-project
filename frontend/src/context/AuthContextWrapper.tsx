import { createContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import api from "../service/api.ts";

interface IUser {
  _id: string;
  email: string;
  image: string;
  __t: string;
}
interface IApplicant extends IUser {
  firstName: string;
  lastName: string;
  __t: "Applicant";
}
interface ICompany extends IUser {
  name: string;
  headquarters: string;
  numberOfEmployees: number;
  website: string;
  description: string;
  __t: "Company";
}

type AuthContextType = {
  user: IApplicant | ICompany | null;
  storeToken: (token: string) => void;
  removeToken: () => void;
  authenticateUser: () => Promise<void>;
  isLoggedIn: boolean;
  isLoading: boolean;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  storeToken: () => {},
  removeToken: () => {},
  authenticateUser: async () => {},
  isLoggedIn: false,
  isLoading: true,
  logout: () => {},
});

type ContextWrapperProps = {
  children: ReactNode;
};

function AuthContextWrapper({ children }: ContextWrapperProps) {
  const [user, setUser] = useState<IApplicant | ICompany | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    authenticateUser();
  }, []);

  const storeToken = (token: string) => localStorage.setItem("token", token);
  const removeToken = () => localStorage.removeItem("token");

  const authenticateUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsLoading(false);
        setIsLoggedIn(false);
        return;
      }
      const response = await api.get<IApplicant | ICompany>(
        `/auth/user/verify`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);

      setUser(response.data);
      setIsLoggedIn(true);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setUser(null);
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  };

  const logout = () => {
    removeToken();
    setUser(null);
    setIsLoggedIn(false);
    navigate(0);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        storeToken,
        removeToken,
        authenticateUser,
        isLoggedIn,
        isLoading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextWrapper;
