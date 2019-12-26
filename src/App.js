import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Nav from "./Nav";
import Title from "./Title";
import NewTask from "./NewTask";
import Background from "./Background";

class App extends React.Component {
	render() {
		return (
			<div>
				<Background />
				<Title />
				<Nav />
				<NewTask />
			</div>
		);
	}
}

export default App;
