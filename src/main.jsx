import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/colors_and_type.css";
import "./styles/global.css";
import App from "./App.jsx";
import { Presentation } from "./components/Presentation.jsx";
import { Showcase } from "./components/Showcase/Showcase.jsx";

function Router() {
  const path = window.location.pathname.replace(/\/$/, "");
  if (path === "/presentation/classic") return <Presentation />;
  if (path === "/site") return <App />;
  // Showcase is the default landing experience at "/" and "/presentation"
  return <Showcase />;
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
