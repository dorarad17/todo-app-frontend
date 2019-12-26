import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Nav from "./Nav";
import Title from "./Title";
import NewTask from "./NewTask";
import Background from "./Background";
import Total from "./Total";
import Tasks from "./Tasks";

class App extends React.Component {
	render() {
		return (
			<div>
				<Title />
				<Background />
				<Nav />
				<NewTask />
				<Total />
				<Tasks />
			</div>
		);
	}
}

export default App;
