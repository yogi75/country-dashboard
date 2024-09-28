"use client";
import React, { lazy, useMemo, useState } from "react";
import { Country } from "../types";
import { getFilteredCountries } from "@/utils";
import { TopBar } from "./TopBar";

interface CountryGridProps {
  countries: Country[];
}

const CountryCard = lazy(() => import("./CountryCard"));

const CountryGrid: React.FC<CountryGridProps> = ({ countries }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const [sortType, setSortType] = useState("asc");

  const filteredCountries = useMemo(
    () => getFilteredCountries(countries, searchTerm, region, sortType),
    [countries, searchTerm, region, sortType]
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value);
  };

  const handleSortType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value);
  };

  return (
    <>
      <TopBar
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        handleRegionChange={handleRegionChange}
        handleSortType={handleSortType}
      />

      <div className="country-grid">
        {filteredCountries.map((country) => (
          <CountryCard key={country.name.official} country={country} />
        ))}
      </div>
    </>
  );
};

export default CountryGrid;
