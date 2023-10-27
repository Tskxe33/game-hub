import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import GameDetailsPage from "../pages/GameDetailsPage";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/games/:id",
        element: <GameDetailsPage />,
      },
    ],
  },
]);

export default router;
