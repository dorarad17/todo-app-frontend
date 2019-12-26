import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Nav from "./Nav";
import Title from "./Title";

class App extends React.Component {
	render() {
		return (
			<div>
				<Title />
				<Nav />
			</div>
		);
	}
}

export default App;
