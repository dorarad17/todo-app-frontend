import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Nav from "./Nav";
import Title from "./Title";
import NewTask from "./NewTask";

class App extends React.Component {
	render() {
		return (
			<div>
				<Title />
				<Nav />
				<NewTask />>
			</div>
		);
	}
}

export default App;
