import React from "react";

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__brand">
        <div className="site-header__logo" aria-hidden="true">
          K
        </div>

        <div>
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

        <button
          type="button"
          className="site-header__theme-button"
          aria-label="Dark mode will be added later"
          disabled
        >
          ☀
        </button>
      </div>
    </header>
  );
}

export default Header;