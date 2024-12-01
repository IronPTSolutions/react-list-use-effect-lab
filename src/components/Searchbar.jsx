import React, { useState } from "react";

function SearchBar({ onFilterChange }) {
  const [filter, setFilter] = useState("");

  const handleInputChange = (e) => {
    setFilter(e.target.value); // Actualiza el estado local del filtro
  };

  const handleSearch = () => {
    onFilterChange(filter); // Comunica el valor al componente padre
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
      <button className="btn btn-primary" type="button" onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
