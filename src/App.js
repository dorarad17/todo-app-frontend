import React from "react";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import Title from "./components/Title";
import NewTask from "./components/NewTask";
import Background from "./components/Background";
import Total from "./components/Total";
import TaskList from "./components/TaskList";
import About from "./components/pages/About";
import axios from "axios";

class App extends React.Component {
	state = {
		tasks: [],
	};

	// component life cycle method
	componentDidMount = () => {
		axios
			.get("https://2oez8h7do2.execute-api.eu-west-2.amazonaws.com/dev/tasks/")
			.then((response) => {
				// handle success
				this.setState({
					tasks: response.data.tasks,
				});
			})
			.catch(function (error) {
				// handle error
				console.error(error);
			});
	};

	deleteTask = (taskId) => {
		// Tasks will be deleted

		axios
			.delete(
				`https://2oez8h7do2.execute-api.eu-west-2.amazonaws.com/dev/tasks/${taskId}`
			)
			.then((response) => {
				// handle success
				const tasks = this.state.tasks;
				const updatedTasks = tasks.filter((item) => item.taskId !== taskId);
				this.setState({
					tasks: updatedTasks,
				});
			})
			.catch(function (error) {
				// handle error
				console.error(error);
			});
	};

	addTask = (taskDescription) => {
		const taskToAdd = {
			description: taskDescription,
			completed: 0,
			userId: 364,
			priority: 3,
		};

		axios
			.post(
				"https://2oez8h7do2.execute-api.eu-west-2.amazonaws.com/dev/tasks/",
				taskToAdd
			)
			.then((response) => {
				// handle success
				taskToAdd.taskId = response.data.tasks.taskId;
				console.log(taskToAdd);

				// push new task to array
				const currentTasks = this.state.tasks;
				currentTasks.push(taskToAdd);

				// update state
				this.setState({
					tasks: currentTasks,
				});
			})
			.catch(function (error) {
				// handle error
				console.error(error);
			});
	};

	priorityChange = (taskId) => {
		const updatedTasks = this.state.tasks;
		for (let i = 0; i < updatedTasks.length; i++) {
			const task = updatedTasks[i];

			if (task.taskId === taskId) {
				// look at your current priority and increase by 1
				var newPriority = task.priority + 1;
				//edge cases what happens at 0
				if (newPriority === 4) {
					newPriority = 1;
				}
				task.priority = newPriority;
			}
		}
		const taskToEdit = updatedTasks.find((task) => task.taskId === taskId);

		axios
			.put(
				`https://2oez8h7do2.execute-api.eu-west-2.amazonaws.com/dev/tasks/${taskId}`,
				taskToEdit
			)
			.then((response) => {
				// handle success

				this.setState({
					tasks: updatedTasks,
				});
			})
			.catch(function (error) {
				// handle error
				console.error(error);
			});
	};

	editTask = (taskId, description) => {
		// find task which needs to be updated
		const updatedTasks = [...this.state.tasks]; // = [...] spread syntax
		for (let i = 0; i < updatedTasks.length; i++) {
			const task = updatedTasks[i];

			if (task.taskId === taskId) {
				task.description = description;
			}
		}
		const taskToEdit = updatedTasks.find((task) => task.taskId === taskId);

		axios
			.put(
				`https://2oez8h7do2.execute-api.eu-west-2.amazonaws.com/dev/tasks/${taskId}`,
				taskToEdit
			)
			.then((response) => {
				// handle success

				// update state
				this.setState({
					tasks: updatedTasks,
				});
			})
			.catch(function (error) {
				// handle error
				console.error(error);
			});
	};

	completedChange = (taskId, completed) => {
		// find task which needs to be updated
		const updatedTasks = [...this.state.tasks]; // = [...] spread syntax
		for (let i = 0; i < updatedTasks.length; i++) {
			const task = updatedTasks[i];

			if (task.taskId === taskId) {
				task.completed = completed;
			}
		}
		const taskToEdit = updatedTasks.find((task) => task.taskId === taskId);

		axios
			.put(
				`https://2oez8h7do2.execute-api.eu-west-2.amazonaws.com/dev/tasks/${taskId}`,
				taskToEdit
			)
			.then((response) => {
				// handle success

				// update state
				this.setState({
					tasks: updatedTasks,
				});
			})
			.catch(function (error) {
				// handle error
				console.error(error);
			});
	};

	render() {
		return (
			<HashRouter>
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
									completedNotify={this.completedChange}
								/>
							</React.Fragment>
						)}
					/>
					<Route path="/about" component={About} />
				</div>
			</HashRouter>
		);
	}
}

export default App;
