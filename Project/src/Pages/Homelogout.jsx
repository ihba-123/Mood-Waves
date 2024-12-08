import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Homelogout() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("LoggedInUser");
    if (user) {
      setLoggedInUser(user);
    } else {
      navigate("/"); 
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

    setIsLoggingOut(true);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
    {/* Logo and Welcome Message */}
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
    </div>

    {/* Contact and Logout/Login Section */}
    <div className="flex items-center space-x-6 rtl:space-x-reverse">
      <a>
       <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
        {isLoggingOut ? "Logging Out..." : ` ${loggedInUser || "Guest"}`}
      </span>
      </a>
      {loggedInUser ? (
        <button className="p-[3px] relative" onClick={handleLogout}>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          Logout
        </div>
      </button>
      ) : (
        <a
          href="#"
          className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
        >
        </a>
      )}
    </div>
  </div>
  <ToastContainer />
</nav>

  );
}

export default Homelogout;







