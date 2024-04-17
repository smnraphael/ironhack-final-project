import { createContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api.ts";

type User = {};

type AuthContextType = {
  user: User | null;
  storeToken: (token: string) => void;
  removeToken: () => void;
  authenticateUser: (typeOfUser?: string) => Promise<void>;
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

type AuthContextWrapperProps = {
  children: ReactNode;
};

function AuthContextWrapper({ children }: AuthContextWrapperProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    authenticateUser();
  }, []);

  const storeToken = (token: string) => localStorage.setItem("token", token);
  const removeToken = () => localStorage.removeItem("token");

  const authenticateUser = async (typeOfUser?: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token || !typeOfUser) {
        setUser(null);
        setIsLoading(false);
        setIsLoggedIn(false);
        return;
      }
      const response = await api.get<User>(`/auth/${typeOfUser}/verify`, {
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

  const logout = () => {
    removeToken();
    setUser(null);
    setIsLoggedIn(false);
    navigate("/");
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
