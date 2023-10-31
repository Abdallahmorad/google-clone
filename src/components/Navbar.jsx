/* eslint-disable react/prop-types */
import { faMoon, faSearch, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

FontAwesomeIcon;
const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <nav className="p-5 flex justify-between items-center ">
        <button
          className={
            "flex items-center gap-2  bg-blue-500 text-white p-2 rounded-lg dark:bg-gray-500"
          }
        >
          <div className=" text-xl">Google</div>
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </button>

        <button
          onClick={() => {
            setDarkMode(!darkMode);
            localStorage.setItem("mode", !darkMode);
          }}
          className=" border border-gray-500 dark:border-gray-800 p-2 rounded-lg"
        >
          {darkMode ? (
            <>
              <FontAwesomeIcon icon={faSun} size="xl" />
              <span className=" mx-1"> Light</span>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faMoon} size="xl" color="gray" />
              <span className=" mx-1"> Dark</span>
            </>
          )}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
