import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page";
import NotFound from "./NotFound";
import "./global.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
