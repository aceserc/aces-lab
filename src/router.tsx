import {
  createBrowserRouter,
} from "react-router-dom";

import App from "./app";
import { A4LetterTemplate } from "./components/a4-letter-template";
import NotFound from "./components/reuseable/not-found";
import { letterData } from "./data/dummy";
import HomeLayout from "./layouts/home.layout";
import CreateLetter from "./pages/create";
import LoginPage from "./pages/login-page";
import AuthLayout from "@/layouts/auth.layout.tsx";
import Dashboard from "@/pages/dashboard.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "login", element: <LoginPage /> },
      { path: "about", element: <A4LetterTemplate {...letterData} /> },
      { path: "contact", element: <div> Contact</div> },
    ],
  },
  {
    path:"/dashboard",
    element:<AuthLayout/>,
    children:[
      {
        path:"/dashboard/create",
        element:<CreateLetter/>
      },{
      path:"/dashboard",
        element: <Dashboard/>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
