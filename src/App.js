import React from "react";
import { render } from "react-dom";
import pf from 'petfinder-client';
import Pet from "./Pet";

const petfinder = pf({
    key: process.env.API_KEY,
    secret: process.env.API_SECRET
});

class App extends React.Component {
  componentDidMount() {
    const promise = petfinder.breed.list({ animal: "dog" });

    promise.then(console.log, console.error);
  }
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Spot" animal="Dog" breed="Dalmatian" />
        <Pet name="Luna" animal="Cat" breed="Mixed" />
        <Pet name="Cremy Ma" animal="Dog" breed="French Bulldog" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
