import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { sendEmailVerification } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // Clearing previous errors messages
    setError("");

    // Validations
    if (password.length < 6) {
      setError("Password must be at least 6 characters long!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password must have at least 1 capital letter!");
      return;
    }

    // Sign in user
    signIn(email, password)
      .then((result) => {
        if (!result.user.emailVerified) {
          // Sending verification email
          sendEmailVerification(result.user).then(() => {
            // Email verification sent!
          });
          toast(
            "We've sent a verification email. Please verify your email address to Login!"
          );
          return;
        } else {
          setUser(result.user);
          // Navigating user after login
          navigate(location?.state ? location.state : "/");
          // Displaying login successfull toast
          toast(`Welcome back ${result.user.displayName}`);
        }
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          setError(
            "Incorrect Email or Password. If you forgot your password, please try resetting it."
          );
        }
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h1 className="text-center text-3xl mt-8">Please Login</h1>
        <form
          onSubmit={handleLogin}
          className="card-body w-3/4 lg:w-1/2 mx-auto"
        >
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
          {error && (
            <p className="font-semibold text-red-600 text-center mt-2">
              {error}
            </p>
          )}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center">
          Do not have an Account? Please{" "}
          <Link className="link link-primary font-bold" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
