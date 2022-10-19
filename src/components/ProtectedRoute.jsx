import { Navigate, useParams } from "react-router-dom";
import { useAuth } from "../context/authContext";
import FullScreenLoading from "../views/Home/components/SearchBar/components/FullScreenLoading";

export default function ProtectedRoute({ children }) {
  const {user, loading} = useAuth();
  if (loading) return <FullScreenLoading />
  if (!user) return <Navigate to="/sign-up" />
  return <>{children}</>
}