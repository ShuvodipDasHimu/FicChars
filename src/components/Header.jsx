import React from "react";
import { NavLink } from "react-router";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/animechars", label: "AnimeChars" },
  { to: "/serieschars", label: "SeriesChars" },
  { to: "/gamechars", label: "GameChars" },
];

const linkClass = ({ isActive }) =>
  isActive
    ? "bg-primary text-primary-content font-semibold"
    : "text-base-content";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="navbar bg-base-200 text-base-content shadow-lg px-2 sm:px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-50 mt-3 w-52 rounded-box border border-base-300 bg-base-200 p-2 text-base-content shadow-lg"
          >
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={linkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-lg sm:text-xl px-2 sm:px-4">
          FicChars
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <button
          type="button"
          className="btn btn-ghost"
          onClick={toggleTheme}
          aria-label="Toggle color theme"
        >
          {theme === "light" ? "🌙" : "🔆"}
        </button>
      </div>
    </div>
  );
};

export default Header;
