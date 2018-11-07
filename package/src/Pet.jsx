import React from "react";
import { Link } from "@reach/router";

class Pet extends React.Component {
  render() {
    const { name, animal, breed, location, id } = this.props;
    return (
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src="http://placecorgi.com/300/300" alt="" />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
        </div>
      </Link>
    );
  }
}

export default Pet;
