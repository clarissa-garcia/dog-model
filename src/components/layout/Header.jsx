import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, UserRound } from "lucide-react";

import foundationLogo from "../../images/foundationLogo.png";

function Header({ showAuthorLink = true }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  }

  const isDarkMode = theme === "dark";

  return (
    <header className="site-header">
      <div className="site-header__brand">
        <img
          className="site-header__foundation-logo"
          src={foundationLogo}
          alt="Lovin' the Blues — The Kerry Blue Terrier Foundation"
        />

        <div
          className="site-header__divider"
          aria-hidden="true"
        />

        <div className="site-header__app-name">
          <p className="site-header__organization">
            Kerry Blue Terrier Foundation
          </p>

          <h1 className="site-header__title">
            Interactive Canine Anatomy
          </h1>
        </div>
      </div>

      <div className="site-header__actions">
        <span className="site-header__status">
          Educational model
        </span>

        {showAuthorLink && (
          <Link
            className="site-header__about-link"
            to="/author"
          >
            <UserRound size={18} aria-hidden="true" />
            <span>About the Author</span>
          </Link>
        )}

        <button
          type="button"
          className="site-header__theme-button"
          onClick={toggleTheme}
          aria-label={
            isDarkMode
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          title={
            isDarkMode
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
        >
          {isDarkMode ? (
            <Sun size={19} aria-hidden="true" />
          ) : (
            <Moon size={19} aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;