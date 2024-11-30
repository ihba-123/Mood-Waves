import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Homelogout() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [isLoggingOut, setIsLoggingOut] = useState(false); // State to handle animation
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("LoggedInUser");
    if (user) {
      setLoggedInUser(user);
    } else {
      navigate("/"); // Redirect if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("LoggedInUser");

    toast.success("Logging out...", {
      position: "top-right",
      autoClose: 3000,
      style: { background: "#48bb78", color: "#fff" },
    });

    setIsLoggingOut(true); // Trigger animation

    setTimeout(() => {
      navigate("/");
    }, 2000); // Navigate after animation
  };

  return (
    <div
      className={`transition-opacity duration-1000 ${
        isLoggingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">
        Welcome, {loggedInUser || "Guest"}!
      </h1>
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-lg transition-transform duration-500 hover:scale-105"
        onClick={handleLogout}
      >
        Logout
      </button>
      <ToastContainer />
    </div>
  );
}

export default Homelogout;
