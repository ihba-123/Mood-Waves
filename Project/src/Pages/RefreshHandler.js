import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function RefreshHandler({ setIsAuthenticate }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticate(true);

      if (
        location.pathname === '/' ||
        location.pathname === '/login' ||
        location.pathname === '/signup'
      ) {
        navigate('/music', { replace: true }); // Use replace: true to prevent navigation history stacking.
      }
    } else {
      setIsAuthenticate(false); // Explicitly handle unauthenticated state.
    }
  }, [location, navigate, setIsAuthenticate]);

  return null;
}

export default RefreshHandler;
