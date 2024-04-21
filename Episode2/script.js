import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "this is h1"),
    React.createElement("h2", {}, "this is h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "this is h1"),
    React.createElement("h2", {}, "this is h2"),
  ]),
]);

console.log(heading);

ReactDOM.render(heading, document.getElementById("root"));
