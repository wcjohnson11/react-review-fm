const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.species),
        React.createElement("h2", {}, props.breed)
    ])
}

class App extends React.Component {
    render() {
        return React.createElement("div", {}, [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, {
                name: "spot",
                species: "dog",
                breed: "dalmatian"
            }),
            React.createElement(Pet, {
                name: "luna",
                species: "cat",
                breed: "black"
            }),
            React.createElement(Pet, {
                name: "cremy ma",
                species: "dog",
                breed: "french bulldog"
            })
        ])
    }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"))