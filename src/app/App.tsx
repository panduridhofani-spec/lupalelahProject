import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "../imports/Homepage";
import MenuPage from "../imports/Menu";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route untuk halaman utama (Homepage) */}
        <Route path="/" element={<Homepage />} />

        {/* Route untuk halaman menu */}
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}
