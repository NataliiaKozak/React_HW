import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const authorization = useSelector((state) => state.auth.authorization);
  return authorization ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
