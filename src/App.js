import React from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";
import Details from "./Details";
import Results from "./Results";
import SearchParams from "./SearchParams";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
          <SearchParams path="/search-params" />
        </Router>
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
