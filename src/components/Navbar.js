  import React from "react";
  import PropTypes from "prop-types";
  //import { Link } from "react-router-dom";

  export default function Navbar(props) {
    return (
      <nav className={`navbar navbar-expand-lg bg-${props.mode === 'light' ? 'light' : 'dark'} navbar-${props.mode === 'light' ? 'light' : 'dark'}`}>
        <div className="container-fluid">
          <a className={`navbar-brand ${props.mode === 'light' ? '' : 'text-white'}`} href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link active ${props.mode === 'light' ? '' : 'text-white'}`}href ="#">
                  {props.home}
                </a>
              </li>
              <li className="nav-item">
               {/* <Link className={`nav-link ${props.mode === 'light' ? '' : 'text-white'}`} to ="/about">
                  {props.about}
                </Link>*/}
              </li>
            </ul>

            {/* Theme selection radio buttons */}
            <div className={`d-flex align-items-center text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              {/* Light */}
              <div className="form-check mx-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="themeMode"
                  id="lightMode"
                  onClick={() => props.togglemode("light")}
                  checked={props.mode === "light"}
                  readOnly
                />
                <label className="form-check-label" htmlFor="lightMode">
                  Light
                </label>
              </div>

              {/* Dark Blue */}
              <div className="form-check mx-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="themeMode"
                  id="darkMode"
                  onClick={() => props.togglemode("dark")}
                  checked={props.mode === "dark"}
                  readOnly
                />
                <label className="form-check-label" htmlFor="darkMode">
                  Dark Blue
                </label>
              </div>

              {/* Dark Green */}
              <div className="form-check mx-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="themeMode"
                  id="greenMode"
                  onClick={() => props.togglemode("darkgreen")}
                  checked={props.mode === "darkgreen"}
                  readOnly
                />
                <label className="form-check-label" htmlFor="greenMode">
                  Dark Green
                </label>
              </div>

              {/* Grey */}
              <div className="form-check mx-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="themeMode"
                  id="greyMode"
                  onClick={() => props.togglemode("grey")}
                  checked={props.mode === "grey"}
                  readOnly
                />
                <label className="form-check-label" htmlFor="greyMode">
                  Grey
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    togglemode: PropTypes.func.isRequired,
  };
