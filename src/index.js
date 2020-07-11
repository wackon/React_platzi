import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css"; //
import BadgeNew from "./pages/BadgeNew";
import "./global.css";

const container = document.getElementById("app");

ReactDom.render(<BadgeNew />, container);
