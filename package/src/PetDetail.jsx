import React, { Component } from "react";
import { petfinder } from "./petApi";
import Carousel from "./Carousel";
import Modal from "./Modal";

export default class PetDetail extends Component {
  state = {
    loading: true,
    showModal: false,
  };

  toggleModal = () =>
    this.setState(prevState => ({ showModal: !prevState.showModal }));

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
    const {
      name,
      description,
      location,
      animal,
      media,
      showModal,
    } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <h1>{name}</h1>
        <h2>
          {animal} - {location}
        </h2>
        <button onClick={this.toggleModal}>Adopt {name}</button>
        <p>{description}</p>
        {showModal && (
          <Modal>
            <h1>Would you like to adopt {name}?</h1>
            <div className="buttons">
              <button onClick={this.toggleModal}>Yes</button>
              <button onClick={this.toggleModal}>Definitely Yes</button>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}
