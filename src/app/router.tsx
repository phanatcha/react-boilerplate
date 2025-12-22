import { createBrowserRouter } from "react-router-dom";
import Home from "../routes/Home.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
]);