import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Inicio from "../pages/Inicio/Inicio";
import Peliculas from "../pages/Peliculas/Peliculas";
import Series from "../pages/Series/Series";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/peliculas",
    element: <Peliculas />,
  },
  {
    path: "/series",
    element: <Series />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
