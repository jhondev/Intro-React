import React from "react";
import Pet from "./Pet";
import { petfinder } from "./petApi";
import SearchBox from "./SearchBox";
import { Consumer } from "./SearchContext";

class PetList extends React.Component {
  state = {
    pets: [],
  };

  componentDidMount = async () => {
    await this.search();
  };

  search = async () => {
    var result = await petfinder.pet.find({
      output: "full",
      location: this.props.searchParams.location,
      animal: this.props.searchParams.animal,
      breed: this.props.searchParams.breed,
    });

    this.setState(() => ({
      pets: Array.isArray(result.petfinder.pets.pet)
        ? result.petfinder.pets.pet
        : [result.petfinder.pets.pet],
    }));

    console.log(result); //eslint-disable-line
  };

  render() {
    return (
      <div className="search">
        <SearchBox search={this.search} />
        {this.state.pets.map(pet => (
          <Pet
            key={pet.id}
            id={pet.id}
            animal={pet.animal}
            name={pet.name}
            location={`${pet.contact.city}, ${pet.contact.state}`}
            media={pet.media}
          />
        ))}
      </div>
    );
  }
}

export default function PetListWithContext(props) {
  return (
    <Consumer>
      {context => <PetList {...props} searchParams={context} />}
    </Consumer>
  );
}
