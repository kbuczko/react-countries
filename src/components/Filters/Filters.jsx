import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classes from "./Filters.module.css";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const Filters = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [regionSelect, setRegionSelect] = useState("");
  const handleSearchChange = (value) => {
    setSearchQuery(value);
    props.filterCountries(value);
  };

  const handleRegionChange = (value) => {
    setRegionSelect(value);
    props.filterByRegion(value);
  };
  return (
    <div className={classes.filters__wrapper}>
      <div className={classes.input__wrapper}>
        <div className={classes.input__icon}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <input
          className={classes["d-block"]}
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => handleSearchChange(e.target.value)}
          value={searchQuery}
        />
      </div>

      <select
        defaultValue=""
        onChange={(e) => handleRegionChange(e.target.value)}
      >
        <option value="" disabled>
          Filter by region
        </option>
        {props.regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
