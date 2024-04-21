import React from "react";
import ReactDOM from "react-dom";
console.log("Before ReactDOM.render");
const root = document.getElementById("root");
const heading = React.createElement("h1", { id: "parent" }, "hi");

console.log(heading);

ReactDOM.render(heading, root);
console.log("After ReactDOM.render");
