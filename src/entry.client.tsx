// src/entry.client.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/root"; // make sure this path & casing match your file

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error('No #root element found in index.html. Add <div id="root"></div>');
}

createRoot(rootEl).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
