
import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayouts/Main";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Shared/Login/Login";
import Register from "../Components/Shared/Register/Register";
import AllCollege from "../Components/AllCollege/AllCollege";
import CollegeDetails from "../Components/AllCollege/CollegeDetails/CollegeDetails";
import Admission from "../Components/Admission/Admission";
import AdmissionForm from "../Components/Pages/AdmissionForm/AdmissionForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/allcollege",
        element: <AllCollege></AllCollege>,
      },
      {
        path: "/colleges/:id",
        element: <CollegeDetails></CollegeDetails>,
        loader: ({ params }) =>
          fetch(
            `https://clg-booking-server.vercel.app/colleges/${params.id}`
          ),
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/admissionForm",
        element: <AdmissionForm></AdmissionForm>,
      },
    ],
  },
]);

export default router;
