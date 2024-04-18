import { useState } from "react";
import useContxt from "../context/useContxt.ts";
import api from "../service/api.ts";
import { useNavigate, Link } from "react-router-dom";
import { AxiosError } from "axios";

const UserLogin = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { email, password } = formState;

  const { storeToken, authenticateUser } = useContxt();

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.currentTarget.id;
    const value = e.currentTarget.value;
    setFormState({ ...formState, [key]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/user/login", formState);
      console.log(response);
      const token = response.data.authToken;
      storeToken(token);
      await authenticateUser();
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.log(error.message);
        setError(error.response?.data?.message);
        setTimeout(() => {
          setError("");
        }, 3000);
      }
    }
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <h1>Log In</h1>
      <p>{error}</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-2"
      >
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@example.com"
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={handleChange}
            type="password"
            id="password"
            name="password"
            placeholder="••••••••••••"
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div>
          <button type="submit" className="bg-blue-200 rounded-lg p-2">
            Log In
          </button>
        </div>
      </form>
      <p>
        Don't have an account yet? Register{" "}
        <Link to={"/user/signup"} className="text-l-contrast">
          HERE
        </Link>
      </p>
    </div>
  );
};

export default UserLogin;
