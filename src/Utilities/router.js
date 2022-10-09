import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Books from "../pages/Books";
import About from "../pages/About";
import Root from "../root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "books",
        loader: () => fetch("https://api.itbook.store/1.0/new"),
        element: <Books></Books>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);

export default router;
