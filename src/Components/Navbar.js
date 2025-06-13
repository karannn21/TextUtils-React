import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
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
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          {/* <button
            type="button"
            onClick={() => props.changeTheme("green")}
            className="btn btn-outline-success"
          >
            Green
          </button>
          <button
            type="button"
            onClick={() => props.changeTheme("grey")}
            className="btn btn-outline-secondary"
          >
            Grey
          </button>
          <button
            type="button"
            onClick={() => props.changeTheme("red")}
            className="btn btn-outline-danger"
          >
            Danger
          </button> */}
          <div className="form-check form-switch ">
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="switchCheckDefault"
            >
              Enable {props.mode === "light" ? "Dark" : "Light"} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};
Navbar.propTypes = { title: PropTypes.string, about: PropTypes.string };
{
  /*Navbar.defaultProps = { title: "set title here", about: "about text here" };*/
}

export default Navbar;
