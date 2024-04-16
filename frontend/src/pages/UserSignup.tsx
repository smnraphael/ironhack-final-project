import useAuth from "../context/useAuth";
import { useState } from "react";
import api from "../service/api";
import { useNavigate } from "react-router-dom";

const UserSignup = () => {
  const { user } = useAuth();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { email, password, firstName, lastName } = formState;

  const handleChange = async (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setFormState({ ...formState, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reponse = await api.post("/auth/user/signup", formState);
      if (reponse.status === 201) {
        navigate("/user/login");
      }
    } catch (error) {
      console.log(error.message);
      setError(error.response?.data?.message);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <h1>Sign Up</h1>
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
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input
            value={firstName}
            onChange={handleChange}
            type="text"
            id="firstName"
            name="firstName"
            placeholder="John"
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName">Last Name</label>
          <input
            value={lastName}
            onChange={handleChange}
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Doe"
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div>
          <button type="submit" className="bg-blue-200 rounded-lg p-2">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserSignup;
