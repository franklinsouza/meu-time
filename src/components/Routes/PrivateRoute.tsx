import { useLocation, Navigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';

function PrivateRoute({ children }: { children: JSX.Element }) {
  const { getStorage } = useLocalStorage();
  const { key } = getStorage();
  const location = useLocation();

  if (!key) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export default PrivateRoute;
