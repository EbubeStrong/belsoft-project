// src/app/components/Header.js
/* eslint-disable @next/next/no-img-element */
import headerStyle from "../../styles/header.module.css";

const Header = () => {
  return (
    <header>
      <div className={`${headerStyle.header} ${headerStyle.desktopScreen}`}>
        <div className={headerStyle.logo}>
          <img src="/images/Logo.png" alt="Founder's Friday Logo" />
          <span>Founder's Friday</span>
        </div>

        <div className={headerStyle.headerContentTwo}>
          <nav className={headerStyle.navLinks}>
            <ul>
              <li className={headerStyle.active}>Home</li>
              <li>About Us</li>
              <li>Gallery</li>
              <li>Contact Us</li>
            </ul>
          </nav>

          <div className={headerStyle.loginContent}>
            <button>
              Register <span className={headerStyle.arrowIcon}></span>
            </button>
          </div>
        </div>
      </div>

      <div className={`${headerStyle.header} ${headerStyle.mobileScreen}`}>
        <div className={headerStyle.logo}>
          <img src="/images/Logo.png" alt="Founder's Friday Logo" />
          <span>Founder's Friday</span>
        </div>

        <div className={headerStyle.menuIcon}>
          <input
            type="checkbox"
            id="menuToggle"
            className={headerStyle.hamburgerCheckbox}
          />
          <label htmlFor="menuToggle" className={headerStyle.hamburger}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 1)" }}
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </label>

          <div className={headerStyle.close}>
            <label htmlFor="menuToggle" className={headerStyle.closeIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "rgba(0, 0, 0, 1)" }}
              >
                <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
              </svg>
            </label>

            <nav className={headerStyle.navLinks}>
              <ul>
                <li className={headerStyle.active}>Home</li>
                <li>About Us</li>
                <li>Gallery</li>
                <li>Contact Us</li>
              </ul>
              <div className={headerStyle.loginContent}>
                <button>
                  Register <span></span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
