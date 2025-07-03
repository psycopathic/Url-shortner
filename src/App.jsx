import { Button } from "./components/ui/button";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/App-layout";
import LandingPage from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Link from "./pages/Link";
import Auth from "./pages/Auth";
import RedirectLink from "./pages/RedirectLink";
import UrlProvider from "./Context";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/link/:id",
        element: <Link />,
      },
      {
        path: "/:id",
        element: <RedirectLink />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <UrlProvider>
        <RouterProvider router={router} />
      </UrlProvider>
    </>
  );
}

export default App;
