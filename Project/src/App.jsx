import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Lazy load components
const Root = lazy(() => import("./Outlet/Root"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const OurScience = lazy(() => import("./components/OurScience"));
const Home = lazy(() => import("./components/Home"));
const Login = lazy(() => import("./Pages/Login"));
const Music = lazy(() => import("./Pages/Music"));
const Signup = lazy(() => import("./Pages/Signup"));
const RefreshHandler = lazy(() => import("./Pages/RefreshHandler"));

const PrivateRoute = ({ isAuthenticate, children }) => {
  return isAuthenticate ? children : <Navigate to="/login" />;
};

const PublicRoute = ({   isAuthenticate, children }) => {
  return isAuthenticate ? <Navigate to="/" /> : children;
};

function App() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);

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
        <RefreshHandler setIsAuthenticate={setIsAuthenticate} />

        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute isAuthenticate={isAuthenticate}>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute isAuthenticate={isAuthenticate}>
                <Signup />
              </PublicRoute>
            }
          />
          <Route
            path="/music"
            element={
              <PrivateRoute isAuthenticate={isAuthenticate}>
                <Music />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Root />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ourscience" element={<OurScience />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
