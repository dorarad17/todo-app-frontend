import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Nav from "./components/Nav";
import Title from "./components/Title";
import NewTask from "./components/NewTask";
import Background from "./components/Background";
import Total from "./components/Total";
import TaskList from "./components/TaskList";
import uuidv4 from "uuid/v4";

class App extends React.Component {
	state = {
		tasks: [
			{ id: uuidv4(), description: "Take meds", completed: false },
			{ id: uuidv4(), description: "Clean kitchen", completed: false },
			{ id: uuidv4(), description: "Cook dinner", completed: false }
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

	addTask = (taskDescription) => {
		const taskToAdd = {
			id: uuidv4(),
			description: taskDescription,
			completed: false
		};

		const currentTasks = this.state.tasks;
		currentTasks.push(taskToAdd);

		this.setState({
			tasks: currentTasks
		});
	};

	render() {
		return (
			<div>
				<Title />
				<Background />
				<Nav />
				<NewTask addTaskFunc={this.addTask} />
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
