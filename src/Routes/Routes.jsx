import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Registation from "../Pages/Registation/Registation";
import Login from "../Pages/Login/Login";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/Colleges",
          element: <Colleges />,
        },
        {
          path: "/Admission",
          element: <Admission/>,
        },
        {
          path: "/mycollege",
          element: <Home></Home>,
        },
        {
          path: "/registation",
          element: <Registation />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  
  ]);