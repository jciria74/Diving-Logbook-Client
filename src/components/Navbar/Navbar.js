import React from "react";
import "./Navbar.scss";
import "bulma/css/bulma.css";
import logo from "../../img/myDiveLogbook-black.png";

const Navbar = () => {
  const [isActive, setisActive] = React.useState(false);

  return (
    <React.Fragment>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
            <img src={logo} alt="Logo" width="70" height="28" />
          </div>
          <div className="navbar-item">
            <p>Bienvenido, Javier</p>
          </div>

          <div
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <div className="navbar-item">
              <a href="/" className="navbar-item">
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
