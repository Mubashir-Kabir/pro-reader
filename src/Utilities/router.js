import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Books from "../pages/Books";
import About from "../pages/About";
import Root from "../root";
import { BookDetails } from "../componants/BookDetails";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
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
        element: (
          <PrivateRoute>
            <Books></Books>
          </PrivateRoute>
        ),
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "sign-in",
        element: <SignIn></SignIn>,
      },
      {
        path: "sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "books/:id",
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
        element: <BookDetails></BookDetails>,
      },
    ],
  },
]);

export default router;
