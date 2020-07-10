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
            src={this.props.avatarUrl}
            alt="Avatar"
          />
          <h1>
            {this.props.firstName}
            <br />
            {this.props.lastName}
          </h1>
        </div>

        <div className="Badge_selection_info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.linkedid}</div>
        </div>

        <div className="Badge_footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
