import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "@/hooks/use-auth.ts";
import {toast} from "sonner";

const AuthLayout = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // Loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there's no user, redirect to the login page
  if (user === null) {
    navigate("/login");
    toast.error("Please Login to acess these resources");// This will redirect the user to the login page
    return null; // Return null or a loading spinner while redirecting
  }

  return (
      <div>
        <Outlet />
      </div>
  );
};

export default AuthLayout;
