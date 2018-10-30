import React from "react";
import Pet from "./Pet";
import pf from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET,
});

class App extends React.Component {
  componentDidMount = async () => {
    const result = await petfinder.breed.list({ animal: "dog" });
    console.log(result); //eslint-disable-line
  };

  render() {
    return (
      <div>
        <h1>Adopt Me with jsx E!</h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Copo" animal="dog" breed="No idea" />
      </div>
    );
  }
}

export default App;
