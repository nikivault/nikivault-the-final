// src/entry.client.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App"; // or your top-level route component
// OR import your routes array if you already created one
// import routes from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [...] // add nested routes if you have them
  },
]);

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("No #root element found in index.html");

createRoot(rootEl).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
