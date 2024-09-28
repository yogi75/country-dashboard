"use client";
import DarkModeToggle from "./DarkModeToggle";

interface Props {
  searchTerm: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRegionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSortType: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const TopBar: React.FC<Props> = ({
  searchTerm,
  handleSearchChange,
  handleRegionChange,
  handleSortType,
}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search by name or capital"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select onChange={handleRegionChange}>
        <option value="">All Regions</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Oceania">Oceania</option>
        <option value="Americas">Americas</option>
      </select>
      <select onChange={handleSortType}>
        <option value="asc">Population Ascending</option>
        <option value="desc">Population Descending</option>
      </select>
      <DarkModeToggle />
    </>
  );
};
