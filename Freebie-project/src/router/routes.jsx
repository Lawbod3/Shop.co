import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Shop from "../pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },

  {
    path: "/Shop",
    element: <Shop />,
  },
]);

export default router;
