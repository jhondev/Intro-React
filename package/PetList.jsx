import React from "react";
import Pet from "./Pet";
import { petfinder } from "./petApi";

class PetList extends React.Component {
  state = {
    pets: [],
  };
  componentDidMount = async () => {
    // const result = await petfinder.breed.list({ animal: "dog" });
    // console.log(result); //eslint-disable-line
    var result = await petfinder.pet.find({
      output: "full",
      location: "Seattle, WA",
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
      <div>
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

export default PetList;
