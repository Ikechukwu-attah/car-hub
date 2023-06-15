"use client";
import React from "react";
import { SearchManufacturer } from ".";

const SearBar = () => {
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer />
      </div>
    </form>
  );
};

export default SearBar;
