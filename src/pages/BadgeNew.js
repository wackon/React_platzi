import React, { useLayoutEffect } from "react";
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Jorge"
                lastName="Alvarez"
                email="jeac86@gmail.com"
                jobTitle="Frontnd Engineer "
                avatarUrl="https://gravatar.com/avatar/ee51eddea6dee1a8b8da84a175833caf?s=400&d=robohash&r=x"
              />
            </div>

            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BadgeNew;
