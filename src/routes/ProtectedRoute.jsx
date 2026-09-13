import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { children } = props;
  const auth = localStorage.getItem("formData");
  const currentRoute = useLocation().pathname; //mencari path yang sekarang aktif

  if (!auth && currentRoute !== "/") {
    return <Navigate to="/" replace />;
  }

  if (auth && currentRoute === "/") {
    return <Navigate to="/home" replace />;
  }
  return <>{children}</>;
};
export default ProtectedRoute;
