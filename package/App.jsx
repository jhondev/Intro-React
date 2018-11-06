import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import PetDetail from "./PetDetail";
import PetList from "./PetList";

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Adopt Me A!</Link>
        </header>

        <Router>
          <PetList path="/" />
          <PetDetail path="/details/:id" />
        </Router>
      </div>
    );
  }
}
