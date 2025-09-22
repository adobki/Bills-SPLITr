import React from "react";
import { createRoot } from "react-dom/client";
import "./app/global.css";
import HomePage from "./app/page";

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
