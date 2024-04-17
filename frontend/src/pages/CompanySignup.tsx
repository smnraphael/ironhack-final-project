import { useState } from "react";
import api from "../service/api";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

const CompanySignup = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    name: "",
    headquarters: "",
    numberOfEmployees: "",
    website: "",
    description: "",
  });
  const [error, setError] = useState<string | undefined>("");
  const navigate = useNavigate();

  const {
    email,
    password,
    name,
    headquarters,
    numberOfEmployees,
    website,
    description,
  } = formState;

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const key = e.target.id;
    const value = e.target.value;
    setFormState({ ...formState, [key]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const reponse = await api.post("/auth/company/signup", formState);
      if (reponse.status === 201) {
        navigate("/company/login");
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
      <h1>Sign Up as a company</h1>
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
          <label htmlFor="name">Company Name</label>
          <input
            value={name}
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="headquarters">Headquarters (optional)</label>
          <input
            value={headquarters}
            onChange={handleChange}
            type="text"
            id="headquarters"
            name="headquarters"
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="numberOfEmployees">
            Number of Employees (optional)
          </label>
          <input
            value={numberOfEmployees}
            onChange={handleChange}
            type="number"
            id="numberOfEmployees"
            name="numberOfEmployees"
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="website">Website (optional)</label>
          <input
            value={website}
            onChange={handleChange}
            type="url"
            id="website"
            name="website"
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Description (optional)</label>
          <textarea
            value={description}
            onChange={handleChange}
            id="description"
            name="description"
            className="border rounded-lg p-2"
          ></textarea>
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

export default CompanySignup;
