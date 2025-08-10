import React from "react";

export default function FilterSortBar({ categories, setCategory, setSort }) {
  return (
    <div style={{ display: "flex", gap: "10px", margin: "20px 0" }}>
      {/* Filter */}
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Sort */}
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort By</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
    </div>
  );
}
