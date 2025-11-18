import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AboutUs from "../pages/AboutUs/AboutUs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/AuthRelated/Login/Login";
import Register from "../pages/AuthRelated/Register/Register";
import Loading from "../components/Loading/Loading";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";
import ResetPassword from "../pages/AuthRelated/ResetPassword/ResetPassword";
import SendParcel from "../pages/SendParcel/SendParcel";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "/error-page",
        Component: ErrorPage,
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () =>
          fetch("/warehouses.json").then((response) => response.json()),
      },
      {
        path: "/rider",
        element : <PrivateRoute>
          <Rider></Rider>
        </PrivateRoute>
      },
      {
        path: "/send_parcel",
        element : <PrivateRoute>
          <SendParcel></SendParcel>
        </PrivateRoute>,
         loader: () =>
          fetch("/warehouses.json").then((response) => response.json()),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path : '/reset_password',
        Component : ResetPassword
      }
    ],
  },
]);

export default router;
