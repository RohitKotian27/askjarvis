import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import axios from "axios";

export default function Registration() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const registrationInitialForm = {
    name: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(registrationInitialForm);
  function handleFormSubmit(e) {
    e.preventDefault();
    axios
      .post("https://askjarvis-backend.vercel.app/register", formData)
      .then((res) => {
        if (res.data === "Success") {
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
        <p className="text-2xl mb-3">Registration Page</p>
        <div className="mb-3">
          <label className="block text-md font-medium">Name</label>
          <input
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 rounded-md outline-none bg-slate-300"
            type="text"
            placeholder="Enter Name"
            required
          />
        </div>
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
          <input
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full p-2 rounded-md outline-none bg-slate-300"
            type="password"
            placeholder="Enter Password"
            required
          />
        </div>
        <button className="w-full bg-blue-950 text-white p-2 mb-1">
          Register
        </button>
        <Link to="/login" className="text-sm font-medium text-blue-600">
          Already have an account?
        </Link>
        {error && <ErrorMessage message={error} />}
      </form>
    </div>
  );
}
