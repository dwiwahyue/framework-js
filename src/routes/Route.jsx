import Home from "../pages/Home";
import { Signup1 } from "../pages/Register";
import DetailMovie from "../pages/DetailMovie";
import DetailTv from "../pages/DetailTv";
import SeachMovie from "../pages/SearchMovie";
import ProtectedRoute from "./ProtectedRoute";
import { createBrowserRouter } from "react-router-dom";
import User from "../pages/User";

const routes = [
  {
    path: "/",
    element: <Signup1 />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/home/user",
    element: (
      <ProtectedRoute>
        <User />
      </ProtectedRoute>
    ),
  },
  {
    path: "/movie/:id",
    element: (
      <ProtectedRoute>
        <DetailMovie />
      </ProtectedRoute>
    ),
  },
  {
    path: "/tv/:id",
    element: (
      <ProtectedRoute>
        <DetailTv />
      </ProtectedRoute>
    ),
  },
  {
    path: "/search",
    element: (
      <ProtectedRoute>
        <SeachMovie />
      </ProtectedRoute>
    ),
  },
];
export const router = createBrowserRouter(routes);
