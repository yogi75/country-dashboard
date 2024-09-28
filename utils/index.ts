import { Country } from "@/types";


export const getFilteredCountries = (countries:Country[], searchTerm:string, region:string, sortType:string):Country[] => countries
.filter((country) => {
  const nameMatch = country.name.common
    .toLowerCase()
    .includes(searchTerm.toLowerCase());
  const capitalMatch =
    country.capital &&
    country.capital[0]?.toLowerCase().includes(searchTerm.toLowerCase());
  return nameMatch || capitalMatch;
})
.filter((country) => (region ? country.region === region : true))
.sort((a, b) =>
  sortType === "asc"
    ? a.population - b.population
    : b.population - a.population
); // Ascending by default