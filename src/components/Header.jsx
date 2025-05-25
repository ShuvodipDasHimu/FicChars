import React, { useState } from "react";
import { NavLink } from "react-router";

const Header = () => {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  setTheme(!theme);
  }
  return (
    <div className="navbar bg-base-300 shadow-lg">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
             <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink to="/animechars">AnimeChars</NavLink>
          </li>
          <li>
            <NavLink to="/serieschars">SeriesChars</NavLink>
          </li>
          <li>
            <NavLink to="/gamechars">GameChars</NavLink>
          </li>
          <li>
            <NavLink>AboutDev</NavLink>
          </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">FicChars</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink to="/animechars">AnimeChars</NavLink>
          </li>
          <li>
            <NavLink to="/serieschars">SeriesChars</NavLink>
          </li>
          <li>
            <NavLink to="/gamechars">GameChars</NavLink>
          </li>
          <li>
            <NavLink>AboutDev</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn" onClick={()=>toggleTheme()}>{theme ? '🌙' : '🔆'}</a>
      </div>
    </div>
  );
};

export default Header;
