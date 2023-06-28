import {useNavigate} from "react-router-dom";
import "./Countries.css";

const Countries = (props) => {
  const navigate = useNavigate();
  let countries = props.countries;
  if (props.filterValue.trim().length > 0) {
    countries = countries.filter((country) =>
      country.name.common
        .toLowerCase()
        .includes(props.filterValue.toLowerCase())
    );
  }
  if (props.filterRegion.trim().length > 0) {
    countries = countries.filter(
      (country) =>
        country.region.toLowerCase() === props.filterRegion.toLowerCase()
    );
  }
  const handleNavigation = (name) => {
    navigate(`/country/${name}`);
  };
  return (
    <ul className="countries__list">
      {countries.map((country) => (
        <li
          className="countries__item"
          key={country.name?.common}
          onClick={() => handleNavigation(country.name?.common)}
        >
          <article>
            <img src={country.flags.png} />
            <h2 className="countries__item__title">{country.name?.common}</h2>
            <p>
              <span>Population:</span>
              <span>{country.population.toLocaleString()}</span>
            </p>
            <p>
              <span>Region:</span>
              <span>{country.region}</span>
            </p>
            <p>
              <span>Capital:</span>
              <span>{country.capital}</span>
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default Countries;
