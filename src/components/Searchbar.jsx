import React, { useState } from "react";

function SearchBar({ onFilterChange }) {
  const [filter, setFilter] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    onFilterChange(value);
  };

  return (
    <div className="mb-3 d-flex">
      <input
        type="text"
        placeholder="Buscar contactos..."
        value={filter}
        onChange={handleInputChange}
        className="form-control me-2"
      />
    </div>
  );
}

export default SearchBar;
