import React from "react";

import conflogo from "../images/badge-header.svg";
import "./styles/Badge.css";
class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge_header">
          <img src={conflogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge_section-name">
          <img
            className="Badge_avatar"
            src="https://gravatar.com/avatar?d=identicon"
            alt="Avatar"
          />
          <h1>
            Jorge <br />
            Alvarez
          </h1>
        </div>

        <div className="Badge_selection_info">
          <h3>Frontend Enginneer</h3>
          <div>@jorgealvarezca</div>
        </div>

        <div className="Badge_footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
