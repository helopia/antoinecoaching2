import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Acceuil.jsx";
import APropos from "../pages/APropos.jsx";
import ErrorPage from "../pages/Error.jsx";
import Layout from "../layout/Layout.jsx";
import Contact from "../pages/Contact.jsx";
import MesServices from "../pages/MesServices.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "apropos",
        element: <APropos />,
      },
      {
        path: "contact",
        element: <Contact/>,        
      },
      {
        path: "messervices",
        element: <MesServices/>,        
      },
    ],
  },
]);
