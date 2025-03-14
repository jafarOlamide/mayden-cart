import { createBrowserRouter, Navigate } from "react-router";
import ProtectedRoute from "../components/ProtectedRoute";
import Login from "../pages/Login";
import ShoppingListPage from "../pages/ShoppingList";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <ShoppingListPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default router;
