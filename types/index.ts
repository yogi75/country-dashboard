export interface Country {
    name: {
      common: string;
      official: string;
    };
    capital: string[];
    population: number;
    region: string;
    flags: {
      png: string;
      svg: string;
    };
    languages: Record<string, string>;
    currencies: Record<string, { name: string; symbol: string }>;
    timezones: string[];
  }
  