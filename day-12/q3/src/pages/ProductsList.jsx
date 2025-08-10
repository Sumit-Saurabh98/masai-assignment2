import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import FilterSortBar from "../components/FilterSortBar";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFiltered(data.products);
        setCategories([...new Set(data.products.map((p) => p.category))]);
      });
  }, []);

  useEffect(() => {
    let updated = [...products];

    // Filter
    if (category) {
      updated = updated.filter((p) => p.category === category);
    }

    // Sort
    if (sort === "low") {
      updated.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      updated.sort((a, b) => b.price - a.price);
    }

    setFiltered(updated);
  }, [category, sort, products]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Products</h1>
      <FilterSortBar
        categories={categories}
        setCategory={setCategory}
        setSort={setSort}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
