import { GetServerSideProps } from "next";
import useCountries from "../hooks/useCountryData";
import CountryGrid from "../components/CountryGrid";
import { Country } from "../types";
import { ThemeProvider } from "../provider/ThemeProvider";

interface Props {
  initialCountries: Country[];
}

const Home: React.FC<Props> = ({ initialCountries }) => {
  const { countries, loading, error } = useCountries();

  const allCountries =
    initialCountries.length > 0 ? initialCountries : countries;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <ThemeProvider>
      <div>
        <h1>Country Data Dashboard</h1>
        <CountryGrid countries={allCountries} />
      </div>
    </ThemeProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries: Country[] = await res.json();

  return {
    props: {
      initialCountries: countries,
    },
  };
};

export default Home;
