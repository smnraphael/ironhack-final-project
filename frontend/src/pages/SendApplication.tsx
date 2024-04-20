import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../service/api";
import { AxiosError } from "axios";
import useAuth from "../context/useAuth";

const SendApplication = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    resume: "",
    coverLetter: "",
    socialNetwork: "",
  });
  const [error, setError] = useState<string>("");

  const { firstName, lastName, email, resume, coverLetter, socialNetwork } =
    formData;

  const navigate = useNavigate();

  const { jobOfferId } = useParams();

  const { user } = useAuth();

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await api.post(
        `/applications/${user?._id}/${jobOfferId}`,
        formData
      );
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
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
      <h1>Send your Application</h1>
      {error}
      <form
        className="flex flex-col justify-center items-center gap-2"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="John"
            required
            className="border rounded-lg p-2"
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Doe"
            required
            className="border rounded-lg p-2"
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@example.com"
            required
            className="border rounded-lg p-2"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="resume">Resume</label>
          <input
            type="file"
            id="resume"
            name="resume"
            placeholder="johndoe@example.com"
            required
            className="border rounded-lg p-2"
            value={resume}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="coverLetter">Cover Letter</label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            placeholder="Write your cover letter here..."
            required
            className="border rounded-lg p-2"
            value={coverLetter}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="socialNetwork">Social Network</label>
          <input
            type="url"
            id="socialNetwork"
            name="socialNetwork"
            placeholder="johndoe@example.com"
            required
            className="border rounded-lg p-2"
            value={socialNetwork}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" className="bg-blue-200 rounded-lg p-2">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendApplication;
