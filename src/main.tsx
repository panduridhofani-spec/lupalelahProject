import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // 1. Import ini
// import App from "./app/App.tsx";
import "./styles/index.css";

import Homepage from "./imports/Homepage";
import MenuPage from "./imports/Menu";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 2. Bungkus aplikasi Anda di dalam BrowserRouter */}
    <BrowserRouter>
      <Routes>
        {/* Route untuk halaman utama (Homepage) */}
        <Route path="/" element={<Homepage />} />

        {/* Route untuk halaman menu */}
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
