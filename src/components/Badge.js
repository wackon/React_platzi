import React from "react";

import conflogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={conflogo} alt="Logo de la conferencia" />
        </div>

        <div>
          <img src="https://gravatar.com/avatar?d=identicon" alt="Avatar" />
          <h1>
            Jorge <br />
            Alvarez
          </h1>
        </div>

        <div>
          <p>Frontend Enginneer</p>
          <p>@jorgealvarezca</p>
        </div>

        <div>#platziconf</div>
      </div>
    );
  }
}

export default Badge;
