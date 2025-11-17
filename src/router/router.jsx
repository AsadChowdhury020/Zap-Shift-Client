import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AboutUs from "../pages/AboutUs/AboutUs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    Component : RootLayout,
    children : [
        {
            index : true,
            Component : Home
        },
        {
          path : '/about-us',
          Component : AboutUs
        },
        {
          path : '/error-page',
          Component : ErrorPage
        },
        {
          path : '/coverage',
          Component : Coverage,
          loader : () => fetch('/warehouses.json').then(response => response.json())
        }
    ]
  },
]);

export default router