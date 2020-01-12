import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Nav from "./components/Nav";
import Title from "./components/Title";
import NewTask from "./components/NewTask";
import Background from "./components/Background";
import Total from "./components/Total";
import Task from "./components/Task";

class App extends React.Component {
	state = {
		tasks: [
			{ id: 1, description: "Take meds", completed: false },
			{ id: 2, description: "Clean kitchen", completed: false },
			{ id: 3, description: "Cook dinner", completed: false }
		]
	};
	render() {
		return (
			<div>
				<Title />
				<Background />
				<Nav />
				<NewTask />
				<Total />
				<Task item="Get milk" />
				<Task item="Finish homework" />
				<Task item="Do laundry" />
			</div>
		);
	}
}

export default App;
