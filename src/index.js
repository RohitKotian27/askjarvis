import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProtectedRoute from "./components/ProtectedRoute";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute Component={App} />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
