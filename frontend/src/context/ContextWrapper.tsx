import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api.ts";

type User = {
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
};

type Company = {
  name: string;
  logo: string;
};

type Job = {
  _id: string;
  company: {
    _id: string;
    logo: string;
  };
  position: string;
  positionOverview: string;
  employmentType: string;
  remote: boolean;
  salary: number;
  createdAt: Date;
};

type Jobs = Job[];

type ContextType = {
  user: User | null;
  company: Company | null;
  jobs: Jobs | null;
  setJobs: Dispatch<SetStateAction<Jobs | null>>;
  storeToken: (token: string) => void;
  removeToken: () => void;
  authenticateUser: () => Promise<void>;
  authenticateCompany: () => Promise<void>;
  isLoggedIn: boolean;
  isLoading: boolean;
  logout: () => void;
  fetchJobs: () => void;
};

export const Context = createContext<ContextType>({
  user: null,
  company: null,
  jobs: null,
  setJobs: () => {},
  storeToken: () => {},
  removeToken: () => {},
  authenticateUser: async () => {},
  authenticateCompany: async () => {},
  isLoggedIn: false,
  isLoading: true,
  logout: () => {},
  fetchJobs: () => {},
});

type ContextWrapperProps = {
  children: ReactNode;
};

function AuthContextWrapper({ children }: ContextWrapperProps) {
  const [user, setUser] = useState<User | null>(null);
  const [company, setCompany] = useState<Company | null>(null);
  const [jobs, setJobs] = useState<Jobs | null>(null);
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

  const fetchJobs = async () => {
    try {
      const { data } = await api.get("/joboffers");
      data.sort(
        (a: Job, b: Job) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setJobs(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Context.Provider
      value={{
        user,
        company,
        jobs,
        setJobs,
        storeToken,
        removeToken,
        authenticateUser,
        authenticateCompany,
        isLoggedIn,
        isLoading,
        logout,
        fetchJobs,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default AuthContextWrapper;
