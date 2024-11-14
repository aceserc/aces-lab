import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Toaster } from "sonner";

import "../styles/index.css";

export const Route = createRootRoute({
  component: () => (
    <>
      <Toaster position="top-right" richColors={true} />
      <Outlet />
    </>
  ),
});
