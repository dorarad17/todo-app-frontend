import React from "react";

class Task extends React.Component {
	state = {
		isEditing: false,
		description: this.props.item.description,
		completed: this.props.item.completed
	};

	deleteClicked = () => {
		this.props.deleteTaskNotify(this.props.item.taskId);
	};

	editClicked = () => {
		this.setState({
			isEditing: !this.state.isEditing
		});
		this.props.editTaskNotify(this.props.item.taskId, this.state.description);
	};

	completeClicked = () => {
		this.setState({
			completed: !this.state.completed
		});
		this.props.completedNotify(this.props.item.taskId, !this.state.completed);
	};

	handleChange = (event) => {
		this.setState({ description: event.target.value });
	};

	priorityClicked = () => {
		this.props.priorityChangeNotify(this.props.item.taskId);
	};

	getStyle = () => {
		if (this.props.item.priority === 1)
			return {
				background: "#ffcccc"
			};
		if (this.props.item.priority === 2)
			return {
				background: "#ffffcc"
			};
		else {
			return {
				background: "#ccffcc"
			};
		}
	};

	render() {
		var priority = "High";
		var priorityClass = "btn btn-space btn-danger";

		if (this.props.item.priority === 2) {
			priority = "Med";
			priorityClass = "btn btn-space btn-warning";
		} else if (this.props.item.priority === 3) {
			priority = "Low";
			priorityClass = "btn btn-space btn-success";
		}

		return (
			<div className="col-lg-6">
				<div className="card text-center item">
					<div style={this.getStyle()}>
						<div className="card-body">
							{this.state.isEditing ? (
								<form onSubmit={this.editClicked}>
									<input
										defaultValue={this.state.description}
										onChange={this.handleChange}
									/>
								</form>
							) : (
								<p className="card-text">
									{this.state.completed ? (
										<strike>{this.props.item.description}</strike>
									) : (
										<span>{this.props.item.description}</span>
									)}
								</p>
							)}
							<p className="card-text">
								<small className="text-muted">
									<button
										type="button"
										className="btn btn-space btn-danger"
										onClick={this.deleteClicked}
									>
										<i className="far fa-trash-alt"></i>
									</button>
									<button
										type="button"
										className="btn btn-space btn-warning"
										onClick={this.editClicked}
									>
										<i className="fas fa-pencil-alt"></i>
									</button>
									<button
										type="button"
										className={priorityClass}
										onClick={this.priorityClicked}
									>
										{priority}
									</button>
									<button
										type="button"
										className="btn btn-space btn-dark"
										onClick={this.completeClicked}
									>
										<i className="fas fa-check"></i>
									</button>
								</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Task;
