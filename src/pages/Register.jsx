import { Link } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoURL = form.get("photoURL");
    const email = form.get("email");
    const password = form.get("password");

    // Clearing previous error messages
    setError("");

    // Validations
    if (password.length < 6) {
      setError("Password must be at least 6 characters long!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password must have at least 1 capital letter!");
      return;
    }

    // Create a New user account
    createUser(email, password)
      .then((result) => {
        // Adding Name and Photo
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            // Profile updated!
          })
          .catch((error) => {
            // An error occurred
          });

        // Displaying success toast
        toast("New User Account Created Successfully!");

        // Clear Form fields
        e.target.reset();
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError(
            "There is already a user account with this email. Please Login or if you have forgot your password try resetting your password from the Login page."
          );
        }
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="mb-8">
        <h1 className="text-center text-3xl mt-2">Please Register</h1>
        <form
          onSubmit={handleRegister}
          className="card-body w-3/4 lg:w-1/2 mx-auto"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              name="photoURL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              className="input input-bordered"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 bottom-4"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {error && (
            <p className="font-semibold text-red-600 text-center mt-2">
              {error}
            </p>
          )}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center">
          Already have an Account? Please{" "}
          <Link className="link link-primary font-bold" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
