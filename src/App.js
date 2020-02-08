import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import Title from "./components/Title";
import NewTask from "./components/NewTask";
import Background from "./components/Background";
import Total from "./components/Total";
import TaskList from "./components/TaskList";
import About from "./components/pages/About";
import uuidv4 from "uuid/v4";

class App extends React.Component {
	state = {
		tasks: [
			{ id: uuidv4(), description: "Get milk", completed: false, priority: 1 },
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
			},

			{
				id: uuidv4(),
				description: "Other task",
				completed: false,
				priority: 3
			},
			{
				id: uuidv4(),
				description: "More tasks",
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

	priorityChange = (taskId) => {
		const updatedTasks = this.state.tasks;
		for (let i = 0; i < updatedTasks.length; i++) {
			const task = updatedTasks[i];

			if (task.id === taskId) {
				// look at your current priority and increase by 1
				var newPriority = task.priority + 1;
				//edge cases what happens at 0
				if (newPriority === 4) {
					newPriority = 1;
				}
				task.priority = newPriority;
				break;
			}
		}

		this.setState({
			tasks: updatedTasks
		});
	};

	editTask = (taskId, description) => {
		// find task which needs to be updated
		const tasks = [...this.state.tasks]; // = [...] spread syntax
		for (let i = 0; i < tasks.length; i++) {
			const task = tasks[i];

			if (task.id === taskId) {
				task.description = description;
			}
		}
		// update state
		this.setState({
			tasks: tasks
		});
	};

	render() {
		return (
			<Router>
				<div className="container">
					<Title />
					<Background />
					<Nav />
					<Route
						exact
						path="/"
						render={(props) => (
							<React.Fragment>
								<NewTask addTaskFunc={this.addTask} />
								<Total taskTotal={this.state.tasks.length} />
								<TaskList
									taskCollection={this.state.tasks}
									deleteTaskNotify={this.deleteTask}
									priorityChangeNotify={this.priorityChange}
									editTaskNotify={this.editTask}
								/>
							</React.Fragment>
						)}
					/>
					<Route path="/about" component={About} />
				</div>
			</Router>
		);
	}
}

export default App;
