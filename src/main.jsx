import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
//import './index.css'
import App from "./App.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import BodyData from "./components/BodyData.jsx";
import Product from "./components/Product.jsx";
import CompareProduct from "./components/CompareProduct.jsx";

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <App sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Outlet context={{ sidebarOpen, setSidebarOpen }} />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <BodyData />,
      },
      {
        path: "/product-detail",
        element: <BodyData />,
      },
      {
        path: "/compare-product",
        element: <CompareProduct />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
