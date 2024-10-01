import MainLayout from "@/layout/MainLayout";
import AboutUs from "@/pages/AboutUs";
import AllProducts from "@/pages/AllProducts";
import Cart from "@/pages/Cart";
import Home from "@/pages/Home";
import ManageProducts from "@/pages/ManageProducts";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
      },
      {
        path: "manage-products",
        element: <ManageProducts />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
