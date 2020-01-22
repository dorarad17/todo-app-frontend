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
			{ id: uuidv4(), description: "Take meds", completed: false, priority: 1 },
			{
				id: uuidv4(),
				description: "Clean kitchen",
				completed: false,
				priority: 2
			},
			{
				id: uuidv4(),
				description: "Cook dinner",
				completed: false,
				priority: 3
			}
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
			completed: false,
			priority: 1
		};

		const currentTasks = this.state.tasks;
		currentTasks.push(taskToAdd);

		this.setState({
			tasks: currentTasks
		});
	};

	priorityChange = (item) => {
		const tasks = this.state.tasks;
		for (var task in tasks) {
			if (task.id === item.id) {
				task.priority = item.priority;
			}
		}

		this.setState({
			tasks: tasks
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
					deleteTaskNotify={this.deleteTask}
					priorityChangeNotify={(item) => this.priorityChange(item)}
				/>
			</div>
		);
	}
}

export default App;
