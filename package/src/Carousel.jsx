import React, { Component } from "react";

export default class Carousel extends Component {
  state = {
    photos: [],
    active: 0,
  };
  static getDerivedStateFromProps({ media }) {
    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    return { photos };
  }

  handlePhotoClick = event => {
    let index = +event.target.dataset.index;
    this.setState(p => ({ ...p, active: index }));
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active].value} alt="primary animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => {
            return (
              /* eslint-disable-next-line */
              <img
                key={photo.value}
                data-index={index}
                src={photo.value}
                className={index === active ? "active" : ""}
                alt="animal th"
                onClick={this.handlePhotoClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
