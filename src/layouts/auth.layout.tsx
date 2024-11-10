import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "@/hooks/use-auth.ts";
import {toast} from "sonner";
import {Navbar} from "@/components/reuseable/navbar.tsx";

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
      <div className="font-bricolageGrotesque flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex-grow">
          <Outlet/>
        </main>
      </div>
  );
};

export default AuthLayout;
