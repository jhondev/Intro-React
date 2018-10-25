const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ])
}

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me1!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Copo",
      animal: "dog",
      breed: "No Idea",
    })
  )
}

/* const App = () => {
  return (<div><h1>Adopt Me New!</h1></div>);
} */

ReactDOM.render(React.createElement(App), document.getElementById("root"))
