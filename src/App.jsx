import {useEffect, useState} from "react";
import Countries from "./components/Countries/Countries";
import Filters from "./components/Filters/Filters";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [filterSearch, setFilterSearch] = useState("");
  const [regions, setRegions] = useState([]);
  const [filterRegion, setFilterRegion] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,population",
        {
          headers: {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
          },
        }
      )
      .then((res) => {
        const countriesData = res.data.sort((a, b) =>
          a.name.common > b.name.common
            ? 1
            : b.name.common > a.name.common
            ? -1
            : 0
        );
        setCountries(countriesData);
        const filteredRegions = [
          ...new Set(countriesData.map((data) => data.region)),
        ];
        setRegions(filteredRegions);
      });
  }, []);
  const handleFilterCountries = (filterValue) => {
    setFilterSearch(filterValue);
  };
  const handleFilterByRegion = (filterValue) => {
    setFilterRegion(filterValue);
  };
  return (
    <div className="app">
      <div className="app__wrapper">
        <main>
          <Filters
            filterCountries={handleFilterCountries}
            filterByRegion={handleFilterByRegion}
            regions={regions}
          />
          <Countries
            filterValue={filterSearch}
            filterRegion={filterRegion}
            countries={countries}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
