import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";

export default function Login() {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const loginInitialForm = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(loginInitialForm);
  function handleFormSubmit(e) {
    e.preventDefault();
    axios
      .post("https://askjarvis-backend.vercel.app/login", formData)
      .then((res) => {
        if (res.data?.message === "Success") {
          sessionStorage.setItem("loggedInUser", JSON.stringify(res.data));
          navigate("/");
        } else {
          setError(res.data);
        }
      })
      .catch((err) => console.warn(err));
  }
  return (
    <div className="flex justify-center items-center h-lvh">
      <form
        onSubmit={handleFormSubmit}
        className="bg-slate-100 text-black p-6 rounded-md min-w-96"
      >
        <p className="text-2xl mb-3">Login Page</p>
        <div className="mb-3">
          <label className="block text-md font-medium">Email</label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-2 rounded-md outline-none bg-slate-300"
            type="email"
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block text-md font-medium">Password</label>
          <div className="flex p-2 rounded-md bg-slate-300 items-center">
            <input
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full outline-none bg-slate-300"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              required
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#606060"
              className="bi bi-eye-fill cursor-pointer"
              viewBox="0 0 16 16"
              onClick={() => setShowPassword((prevState) => !prevState)}
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
            </svg>
          </div>
        </div>
        <button className="w-full bg-blue-950 text-white p-2 mb-1">
          Login
        </button>
        <Link to="/register" className="text-sm font-medium text-blue-600">
          Don't have an account?
        </Link>
        {error && <ErrorMessage message={error} />}
      </form>
    </div>
  );
}
