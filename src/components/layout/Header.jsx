import React from "react";
import foundationLogo from "../../images/foundationLogo.png";
import { UserRound } from "lucide-react";

function Header({ showAuthorLink = true }) {
  return (
    <header className="site-header">
      <div className="site-header__brand">
         <img
          className="site-header__foundation-logo"
          src={foundationLogo}
          alt="Lovin' the Blues — The Kerry Blue Terrier Foundation"
        />

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

        {showAuthorLink &&
          (<a
            className="site-header__about-link"
            href="#/author"
          >
          <UserRound
            className="site-header__about-icon"
            size={18}
            aria-hidden="true"
          />
          <span>About the Author</span>
        </a>)
        
        }
        


      </div>
    </header>
  );
}

export default Header;