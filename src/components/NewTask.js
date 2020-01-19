import React from "react";

class NewTask extends React.Component {
	state = {
		taskDescription: "NEW TASK",
		placeholder: "New task here..."
	};

	addTask = () => {
		this.props.addTaskFunc(this.state.taskDescription);
		this.setState({ placeholder: "What else..." });
	};

	newTaskDescription = (event) => {
		this.setState({
			taskDescription: event.target.value
		});
	};

	render() {
		return (
			<div className="container">
				<div className="row text-center" id="newTask">
					<form className="form-inline">
						<div className="col-9">
							<input
								className="form-control mr-sm-2"
								type="search"
								placeholder={this.state.placeholder}
								onChange={this.newTaskDescription}
							/>
						</div>
						<div className="col">
							<button type="button" className="btn btn-success">
								<i className="fas fa-plus" onClick={this.addTask}></i>
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default NewTask;
