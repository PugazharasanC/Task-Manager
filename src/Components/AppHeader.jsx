import { FaSun, FaMoon } from "react-icons/fa6";
import { useTheme } from "../Contexts/ThemeContext";
import { NavLink } from "react-router-dom";

const AppHeader = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8 border-b-2 transition-colors duration-200 bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-600">
      <h1 className="text-2xl sm:text-3xl font-semibold italic text-gray-900 dark:text-white">
        GUVI
      </h1>
      <nav className="text-lg">
        <ul className="flex items-center gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "underline font-bold" : "hover:text-blue-600"
                } transition-colors duration-200 text-gray-800 dark:text-gray-300`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive ? "underline font-bold" : "hover:text-blue-600"
                } transition-colors duration-200 text-gray-800 dark:text-gray-300`
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="theme text-3xl">
        <button
          className="px-4 py-2 border-2 rounded-lg mx-2 transition-colors duration-200 border-gray-300 bg-gray-200 hover:bg-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <FaSun />
          ) : (
            <FaMoon />
          )}
        </button>
      </div>
    </div>
  );
};

export default AppHeader;
