import React, { useLayoutEffect } from "react";
import logo from "../images/logo.svg";
import "./styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">platzi</span>
            <span className="font-weight-bold">conf</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
