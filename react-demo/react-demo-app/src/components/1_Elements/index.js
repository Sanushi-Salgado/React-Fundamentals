import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// Rendering an element
ReactDOM.render(
  React.createElement("h1", null, "Hello"),
  document.getElementById("root")
);

// Adding properties to elements
ReactDOM.render(
  React.createElement("p", { style: { color: "blue" } }, "Hello"),
  document.getElementById("root")
);

// Rendering multiple elements
ReactDOM.render(
  React.createElement(
    "div",
    { style: { color: "red" } },
    React.createElement("h1", null, "Hi Sanushi")
  ),
  document.getElementById("root")
);

ReactDOM.render(
  React.createElement(
    "ul",
    { style: { color: "green" } },
    React.createElement("li", null, "Hot dogs"),
    React.createElement("li", null, "Sushi"),
    React.createElement("li", null, "Pizza"),
    React.createElement("li", null, "Burgers")
  ),
  document.getElementById("root")
);