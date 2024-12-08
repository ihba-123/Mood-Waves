import React, { useState, useEffect } from "react";
  import { Link, useNavigate } from "react-router-dom";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import "@fortawesome/fontawesome-free/css/all.min.css";

  function Signup() {
    const navigate = useNavigate();
    const [signup, setSignup] = useState({ name: "", email: "", password: "" });
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
      setSignup({ ...signup, [name]: value });
    };

    const handleSignup = async (e) => {
      e.preventDefault();
      const { name, email, password } = signup;

      if (!name || !email || !password) {
        toast.error("All fields are required!", {
          position: "top-right",
          autoClose: 3000,
          style: { background: "#f56565", color: "#fff" },
        });
        return;
      }

      try {
        const response = await fetch("http://localhost:8080/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(signup),
        });

        if (!response.ok) throw new Error(`Error: ${response.status}`);

        const { success, message } = await response.json();

        if (success) {
          toast.success(message, {
            position: "top-right",
            autoClose: 3000,
            style: { background: "#48bb78", color: "#fff" },
          });
          setSignup({ name: "", email: "", password: "" });
          setTimeout(() => {
            navigate("/login");
          },3000);
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

        <div className="bg-white font-bold bg-opacity-20 backdrop-blur-lg p-8 rounded-3xl shadow-2xl max-w-md w-full z-10"data-Aos="zoom-in">
          <h1 className="text-4xl font-bold text-center mb-8 text-grey-800">Sign up</h1>
          <form onSubmit={handleSignup} className="space-y-6">
            <input
              onChange={handleChange}
              name="name"
              type="text"
              value={signup.name}
              placeholder="Username"
              className="w-full bg-transparent border text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-pink-500"
            />
            <input
              onChange={handleChange}
              name="email"
              type="email"
              value={signup.email}
              placeholder="Email"
              className="w-full bg-transparent border text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-pink-500"
            />
            <input
              autoComplete="off"
              onChange={handleChange}
              name="password"
              type="password"
              value={signup.password}
              placeholder="Password"
              className="w-full bg-transparent border text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-pink-500"
            />
            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg hover:opacity-80 transition duration-300">
              Sign Up
            </button>
          </form>
          <div className="mt-8 text-center">
            <span className="text-purple-950">Already have an account? </span>
            <Link to="/login" className="text-white hover:underline font-bold hover:text-gray-300 transition duration-300">Login</Link>
          </div>
        </div>

        {/* Toast Notification */}
        <ToastContainer />
      </div>
    );
  }

  export default Signup;