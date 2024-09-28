"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Country } from "../types";
import { CountryDetailsModal } from "./CountryDetailsModal";

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="country-card" onClick={() => setIsModalOpen(true)}>
        <Image
          src={country.flags.png}
          width={500}
          height={500}
          alt={`${country.name.common} flag`}
          loading="lazy"
        />
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population.toLocaleString()}</p>
        <p>Region: {country.region}</p>
      </div>
      {isModalOpen && (
        <CountryDetailsModal
          country={country}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default CountryCard;
