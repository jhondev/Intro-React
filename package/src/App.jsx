import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import PetDetail from "./PetDetail";
import PetList from "./PetList";
import SearchParams from "./SearchParams";
import { Provider } from "./SearchContext";
import { petfinder } from "./petApi";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "Seattle, WA",
      animal: "",
      breed: "",
      breeds: [],
      handleAnimalChange: this.handleAnimalChange,
      handleBreedChange: this.handleBreedChange,
      handleLocationChange: this.handleLocationChange,
      getBreeds: this.getBreeds,
    };
  }

  handleLocationChange = event => {
    this.setState({ location: event.target.value });
  };

  handleAnimalChange = event => {
    this.setState({ animal: event.target.value }, this.getBreeds);
  };

  handleBreedChange = event => {
    this.setState({ breed: event.target.value });
  };

  async getBreeds() {
    if (!this.state.animal) {
      this.setState(() => ({ breeds: [] }));
      return;
    }

    const data = await petfinder.breed.list({ animal: this.state.animal });

    if (
      data.petfinder &&
      data.petfinder.breeds &&
      Array.isArray(data.petfinder.breeds.breed)
    ) {
      this.setState({ breeds: data.petfinder.breeds.breed });
    } else {
      this.setState({ breeds: [] });
    }
  }

  render() {
    return (
      <div>
        <header>
          <Link to="/">Adopt Me A!</Link>
          <Link to="/search-params">
            <span aria-label="search" role="img">
              🔍
            </span>
          </Link>
        </header>
        <Provider value={this.state}>
          <Router>
            <PetList path="/" />
            <PetDetail path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}
