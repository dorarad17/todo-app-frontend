import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Nav from "./components/Nav";
import Title from "./components/Title";
import NewTask from "./components/NewTask";
import Background from "./components/Background";
import Total from "./components/Total";
import TaskList from "./components/TaskList";

class App extends React.Component {
	state = {
		tasks: [
			{ id: 1, description: "Take meds", completed: false },
			{ id: 2, description: "Clean kitchen", completed: false },
			{ id: 3, description: "Cook dinner", completed: false }
		]
	};

	deleteTask = (taskId) => {
		// Tasks will be deleted
		const tasks = this.state.tasks;
		const updatedTasks = tasks.filter((item) => item.id !== taskId);
		this.setState({
			tasks: updatedTasks
		});
	};

	render() {
		return (
			<div>
				<Title />
				<Background />
				<Nav />
				<NewTask />
				<Total taskTotal={this.state.tasks.length} />
				<TaskList
					taskCollection={this.state.tasks}
					deleteTaskFunc={this.deleteTask}
				/>
			</div>
		);
	}
}

export default App;
