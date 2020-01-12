import React from "react";

class Task extends React.Component {
	render() {
		return (
			<div classNameName="container">
				<div className="row item text-center">
					<div className="col-12">
						{this.props.item.description}
						<button type="button" className="btn btn-space btn-danger">
							<i className="far fa-trash-alt"></i>
						</button>
						<button type="button" className="btn btn-space btn-warning">
							<i className="fas fa-pencil-alt"></i>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Task;
