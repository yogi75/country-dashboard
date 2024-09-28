"use client";
import Image from "next/image";
import { Country } from "../types";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface CountryDetailsModalProps {
  country: Country;
  onClose: () => void;
}

export const CountryDetailsModal: React.FC<CountryDetailsModalProps> = ({
  country,
  onClose,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="modal-overlay">
      <div className={`${theme} modal-content`}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <Image
          src={country.flags.png}
          width={170}
          height={100}
          alt={`${country.name.common} flag`}
          loading="lazy"
        />
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Languages: {Object.values(country.languages).join(", ")}</p>
        <p>
          Currencies:{" "}
          {country.currencies &&
            Object.values(country.currencies)
              .map((c) => `${c.name} (${c.symbol})`)
              .join(", ")}
        </p>
        <p>Timezones: {country.timezones.join(", ")}</p>
      </div>
    </div>
  );
};
