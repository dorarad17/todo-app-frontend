import React from "react";

class Task extends React.Component {
	deleteClicked = () => {
		this.props.deleteTaskNotify(this.props.item.id);
	};

	editClicked = () => {
		this.props.editTaskNotify(this.props.item.id);
	};

	priorityClicked = () => {
		this.props.priorityChangeNotify(this.props.item.id);
	};

	render() {
		var priority = "High";
		var priorityClass = "btn btn-space btn-danger";

		if (this.props.item.priority === 2) {
			priority = "Medium";
			priorityClass = "btn btn-space btn-warning";
		} else if (this.props.item.priority === 3) {
			priority = "Low";
			priorityClass = "btn btn-space btn-success";
		}

		return (
			<div className="container">
				<div className="row item text-center">
					<div className="col-12">
						{this.props.item.description}
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
					</div>
				</div>
			</div>
		);
	}
}

export default Task;
