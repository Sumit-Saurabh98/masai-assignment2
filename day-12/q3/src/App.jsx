import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductsList from "./pages/ProductsList";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <div>
      <nav style={{ padding: "10px", background: "#ddd" }}>
        <Link to="/">All Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}
