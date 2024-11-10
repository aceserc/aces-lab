import {
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import HomeLayout from "./layouts/home.layout";
import { A4LetterTemplate } from "./components/a4-letter-template";
import { letterData } from "./data/dummy";
import CreateLetter from "./pages/Create";
import NotFound from "./components/reuseable/not-found";
import LoginPage from "./pages/login-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "", element: <App /> },
      { path: "login", element: <LoginPage /> },
      { path: "about", element: <A4LetterTemplate {...letterData} /> },
      { path: "contact", element: <div> Contact</div> },
      { path: "letter", element: <CreateLetter /> }
    ],
  },
  {
    path: "*",
    element: <NotFound />
  }
]);