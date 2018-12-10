import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked the title");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "spot",
        species: "dog",
        breed: "dalmatian"
      }),
      React.createElement(Pet, {
        name: "luna",
        species: "cat",
        breed: "black"
      }),
      React.createElement(Pet, {
        name: "cremy ma",
        species: "dog",
        breed: "french bulldog"
      })
    ]);
  }
}

render(React.createElement(App), document.getElementById("root"));
