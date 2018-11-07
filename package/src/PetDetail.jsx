import React, { Component } from "react";
import { petfinder } from "./petApi";
import Carousel from "./Carousel";

export default class PetDetail extends Component {
  state = {
    loading: true,
  };

  componentDidMount = async () => {
    const result = await petfinder.pet.get({
      output: "full",
      id: this.props.id,
    });
    const { pet } = result.petfinder;
    this.setState(() => ({
      name: pet.name,
      animal: pet.animal,
      location: `${pet.contact.city}, ${pet.contact.state}`,
      description: pet.description,
      media: pet.media,
      loading: false,
    }));
  };

  render() {
    if (this.state.loading) return <div>loading...</div>;
    const { name, description, location, animal, media } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <h1>{name}</h1>
        <h2>
          {animal} - {location}
        </h2>
        <p>{description}</p>
      </div>
    );
  }
}
