import {useNavigate, useParams} from "react-router-dom";
import "./CountryDetail.css";
import {useEffect} from "react";
import {useState} from "react";
import axios from "axios";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CountryDetail = () => {
  const {name} = useParams();
  const [country, setCountry] = useState({});
  const [borders, setBorders] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const reqCountries = await axios.get(
      `https://restcountries.com/v3.1/name/${name}`
    );
    setCountry(reqCountries.data[0]);
    const borders = reqCountries.data[0].borders;
    const reqBorders = await axios.get(
      `https://restcountries.com/v3.1/alpha?codes=${borders}`
    );
    const bordersData = reqBorders.data;
    setBorders(bordersData);
  };

  useEffect(() => {
    fetchData();
  }, [name]);

  const handleNavigation = () => {
    navigate("../");
  };
  const handleBorderCountryNavigation = async (countryInfo) => {
    navigate(`../country/${countryInfo.name.common}`);
  };
  return (
    <div className="country__details">
      <article className="country__wrapper">
        <button className="country__btn" onClick={handleNavigation}>
          <span className="country__btn-icon">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
          <span>Back</span>
        </button>
        <section className="country__columns">
          <div>
            <img className="country__img" src={country.flags?.svg} alt="" />
          </div>
          <div className="country__values__wrapper">
            <h2>{country.name?.common}</h2>
            <div className="country__values">
              <div>
                <p>
                  <span className="country__values-key">Native name: </span>
                </p>
                <p>
                  <span className="country__values-key">Population:</span>
                  {country.population?.toLocaleString()}
                </p>
                <p>
                  <span className="country__values-key">Region:</span>{" "}
                  {country.region}
                </p>
                <p>
                  <span className="country__values-key">Sub Region:</span>{" "}
                  {country.subregion}
                </p>
                <p>
                  <span className="country__values-key">Capital:</span>{" "}
                  {country.capital}
                </p>
              </div>
              <div>
                <p>
                  <span className="country__values-key">Top Level Domain:</span>{" "}
                  {country.tld}
                </p>
                <p>
                  <span className="country__values-key">Currencies:</span>
                  {country.currencies &&
                    Object.values(country.currencies).map(
                      (currency) => currency.name
                    )}
                </p>
                <p>
                  <span className="country__values-key">Languages:</span>
                  {country.languages &&
                    Object.values(country.languages).map((language, index) => {
                      if (index < Object.values(country.languages).length - 1) {
                        return language + ", ";
                      } else return language;
                    })}
                </p>
              </div>
            </div>

            <p>
              <span className="country__values-key">Border Countries:</span>
              {borders.map((border) => (
                <span
                  className="border-country__btn"
                  key={border.name.common}
                  onClick={() => handleBorderCountryNavigation(border)}
                >
                  {border.name.common}
                </span>
              ))}
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default CountryDetail;
