import React from "react";

export default function SearchFilter({
  handleReset,
  handleGenderFilter,
  handleSearchChange,
  handleSearchSubmit,
  handleTransactionFilter,
}) {
  return (
    <div>
      <form onSubmit={handleSearchSubmit} className="search">
        <input
          onChange={handleSearchChange}
          className="search-box"
          placeholder="search"
        />
        <select onChange={handleGenderFilter}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="prefer to skip">Prefer to skip</option>
        </select>
        <select onChange={handleTransactionFilter}>
          <option value="cc">cc</option>
          <option value="money order">money order</option>
          <option value="paypal">paypal</option>
          <option value="check">check</option>
        </select>
      </form>
      <button onClick={handleReset} className="reset">
        Reset
      </button>
    </div>
  );
}
