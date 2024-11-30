import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: "", password: "" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Handle mouse movement to create dynamic background effect
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = login;

    if (!email || !password) {
      toast.error("All fields are required!", {
        position: "top-right",
        autoClose: 3000,
        style: { background: "#f56565", color: "#fff" },
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Invalid email format!", {
        position: "top-right",
        autoClose: 3000,
        style: { background: "#f56565", color: "#fff" },
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(login),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const { success, message, name, jwtToken } = await response.json();

      if (success) {
        // Save token securely (e.g., localStorage as a fallback)
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("LoggedInUser", name);

        toast.success(message, {
          position: "top-right",
          autoClose: 3000,
          style: { background: "#48bb78", color: "#fff" },
        });
        setTimeout(() => {
          navigate("/Music"); // Adjust route as per your app's structure
        },1000);
      }
    } catch (error) {
      toast.error(error.message || "An error occurred", {
        position: "top-right",
        autoClose: 3000,
        style: { background: "#f56565", color: "#fff" },
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r black relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgb(51, 34, 22), transparent)`,
          transition: "background 0.1s ease-out",
        }}
      ></div>

      <div className="bg-white font-bold bg-opacity-20 backdrop-blur-lg p-8 rounded-3xl shadow-2xl max-w-md w-full z-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Login
        </h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <input
            onChange={handleChange}
            name="email"
            type="email"
            value={login.email}
            placeholder="Email"
            className="w-full bg-transparent text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-pink-500"
          />
          <input
            autoComplete="off"
            onChange={handleChange}
            name="password"
            type="password"
            value={login.password}
            placeholder="Password"
            className="w-full bg-transparent text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-pink-500"
          />
          <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg hover:opacity-80 transition duration-300">
            Login
          </button>
        </form>
        <div className="mt-8 text-center">
          <span className="text-purple-950">Don't have an account? </span>
          <Link
            to="/signup"
            className="text-white hover:underline font-bold hover:text-gray-300 transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Toast Notification */}
      <ToastContainer />
    </div>
  );
}

export default Login;
