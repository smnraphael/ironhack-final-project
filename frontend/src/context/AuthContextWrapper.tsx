import { createContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api.ts";

type User = {
  firstName: string;
  avatar: string;
};

type Company = {
  name: string;
  logo: string;
};

type AuthContextType = {
  user: User | null;
  company: Company | null;
  storeToken: (token: string) => void;
  removeToken: () => void;
  authenticateUser: () => Promise<void>;
  authenticateCompany: () => Promise<void>;
  isLoggedIn: boolean;
  isLoading: boolean;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  company: null,
  storeToken: () => {},
  removeToken: () => {},
  authenticateUser: async () => {},
  authenticateCompany: async () => {},
  isLoggedIn: false,
  isLoading: true,
  logout: () => {},
});

type AuthContextWrapperProps = {
  children: ReactNode;
};

function AuthContextWrapper({ children }: AuthContextWrapperProps) {
  const [user, setUser] = useState<User | null>(null);
  const [company, setCompany] = useState<Company | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    authenticateUser();
    authenticateCompany();
  }, []);

  const storeToken = (token: string) => localStorage.setItem("token", token);
  const removeToken = () => localStorage.removeItem("token");

  const authenticateUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log(user);
        console.log(token);
        setIsLoading(false);
        setIsLoggedIn(false);
        return;
      }
      const response = await api.get<User>(`/auth/user/verify`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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

  const authenticateCompany = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log(company);
        console.log(token);
        setIsLoading(false);
        setIsLoggedIn(false);
        return;
      }
      const response = await api.get<Company>(`/auth/company/verify`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCompany(response.data);
      setIsLoggedIn(true);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setCompany(null);
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  };

  const logout = () => {
    removeToken();
    setUser(null);
    setCompany(null);
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        company,
        storeToken,
        removeToken,
        authenticateUser,
        authenticateCompany,
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
