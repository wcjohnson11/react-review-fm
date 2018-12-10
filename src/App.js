import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked the title");
  }
  render() {
    return (
      <div>
        <h1 onClick={this.handleTitleClick}>Adopt Me!</h1>
        <Pet name="Spot" animal="Dog" breed="Dalmatian" />
        <Pet name="Luna" animal="Cat" breed="Mixed" />
        <Pet name="Cremy Ma" animal="Dog" breed="French Bulldog" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
