import { createBrowserRouter } from "react-router";

import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ProjectDetails from "../Pages/ProjectDetails";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails></ProjectDetails>,
      },
    ],
  },
]);

export default MainRoutes;
