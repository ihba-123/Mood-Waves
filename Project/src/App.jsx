import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Lazy load components
const Root = lazy(() => import("./Outlet/Root"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const OurScience = lazy(() => import("./components/OurScience"));
const Home = lazy(() => import("./components/Home"));
const GoogleLogin = lazy(() => import("./components/GoogleLogin"));
const Login = lazy(() => import("./Pages/Login"));
const Music = lazy(() => import("./Pages/Music"));
const Signup = lazy(() => import("./Pages/Signup"));
const RefreshHandler = lazy(() => import("./Pages/RefreshHandler"));

function App() {
  // Authentication state
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  // PrivateRoute component
  const PrivateRoute = ({ element }) => {
    return isAuthenticate ? element : <Navigate to="/login" />;
  };

  // PublicRoute component for redirecting authenticated users
  const PublicRoute = ({ element }) => {
    return isAuthenticate ? <Navigate to="/" /> : element;
  };

  return (
    <Router>
      <Suspense
        fallback={
          <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
            <span className="sr-only">Loading...</span>
            <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-8 w-8 bg-black rounded-full animate-bounce"></div>
          </div>
        }
      >
        {/* Refresh Authentication State */}
        <RefreshHandler setIsAuthenticate={setIsAuthenticate}/>

        <Routes>
          {/* Authentication Routes */}
          <Route path="/login" element={<PublicRoute element={<Login />} />} />
          <Route path="/signup" element={<PublicRoute element={<Signup />} />} />

          {/* Private Routes */}
          <Route path="/music" element={<PrivateRoute element={<Music />} />} />

          {/* Public Routes */}
          <Route path="/" element={<PublicRoute element={<Root />} />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ourscience" element={<OurScience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/googlelogin" element={<GoogleLogin />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
