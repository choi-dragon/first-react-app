import React, { Component } from "react";
import { CardList } from "./components/CardList";
import { InputBar } from "./components/input/InputBar";
import "./App.css";
class App extends Component {
	constructor() {
		super();
		this.state = {
			users: [], 
			searchField: "",
		};
	}
	async componentDidMount() {
		// this is similar to useEffect, which is triggered when this component is rendered.
		await fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ users }))
			.catch((e) => console.log(e));
	}
	handleChange = (e) => {
		this.setState({ searchField: e.target.value });
	};
	render() {
		// this only works in 'class component'
		const { users, searchField } = this.state;
		const filteredMonsters = users.filter((monster) => {
			return monster.name
				.toLowerCase()
				.includes(searchField.toLowerCase());
		});
		return (
			<div className="App">
        <h1>Monster Index</h1>
				<InputBar
					type="search"
					placeholder="search monsters"
					onChange={this.handleChange}
				/>
				<CardList users={filteredMonsters} />
			</div>
		);
	}
}

export default App;
