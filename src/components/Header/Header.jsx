import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classes from "./Header.module.css";
import {faMoon} from "@fortawesome/free-solid-svg-icons";
import {faMoon as faMoonRegular} from "@fortawesome/free-regular-svg-icons";
import {useState} from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <header className={classes.header}>
      <h1>Where in the world?</h1>
      <button
        className={classes.darkModeBtn}
        onClick={() => setDarkMode((prevState) => !prevState)}
      >
        {darkMode ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faMoonRegular} />
        )}
        <span>Dark Mode</span>
      </button>
    </header>
  );
};

export default Header;
