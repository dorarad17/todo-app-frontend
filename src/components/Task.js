import React from "react";

class Task extends React.Component {
	state = {
		isEditing: false,
		description: this.props.item.description
	};

	deleteClicked = () => {
		this.props.deleteTaskNotify(this.props.item.id);
	};

	editClicked = () => {
		this.setState({
			isEditing: !this.state.isEditing
		});
		this.props.editTaskNotify(this.props.item.id, this.state.description);
	};

	handleChange = (event) => {
		this.setState({ description: event.target.value });
	};

	priorityClicked = () => {
		this.props.priorityChangeNotify(this.props.item.id);
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
								<p className="card-text">{this.props.item.description}</p>
							)}
							<p className="card-text">
								<small class="text-muted">
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
