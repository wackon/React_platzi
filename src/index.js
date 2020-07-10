import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css"; //
import Badge from "./components/Badge";
import "./global.css";

const container = document.getElementById("app");

ReactDom.render(
  <Badge
    firstName="Jenny"
    lastName="Castaño"
    avatarUrl="https://gravatar.com/avatar?d=identicon"
    jobTitle="Auxilar de Radiologia"
    linkedid="jennyalvarezca"
  />,
  container
);
