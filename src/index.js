// const element = document.createElement('h1')

// element.innerText = 'Hello ,platzi Bages'

// const container = document.getElementById('app')

// container.appendChild(element)

import React from "react";
import ReactDom from "react-dom";

// const jsx = <h1>Hello Platzi Badges from React!</h1>;
// const element = React.createElement(
//   "a",
//   { href: "http://platzi.com" },
//   "Ir a platzi"
// );

// const name = "Camilo";
// const suma = () => 3 + 3
// // const element = React.createElement("h1", {}, `Hola soy ${name}`);
// const jsx = <h1>'Hola! soy ,{undefined}</h1>

// const jsx = <div>
//     <h1>
//         Hola, soy Richard
//     </h1>
//     <p>
//         Soy ingeniero frontend
//     </p>
// </div>

const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hola soy Richard"),
  React.createElement("p", {}, "Soy ingeniero de la Web")
);
const container = document.getElementById("app");

// ReactDom.render(__qué,____Donde_____)
ReactDom.render(element, container);
