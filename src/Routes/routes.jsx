import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Page/Home/Home";
import Login from "../Page/Authentication/Login";
import Register from "../Page/Authentication/Register";
import NewsDetails from "../Page/Home/NewsCard/NewsDetails";
import PrivetRoute from "../Component/PrivetRoute/PrivetRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("news.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/newsDetails/:id",
        loader: () => fetch("news.json"),
        element: (
          <PrivetRoute>
            <NewsDetails></NewsDetails>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default routes;
