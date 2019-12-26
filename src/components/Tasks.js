import React from "react";

class Tasks extends React.Component {
	render() {
		return (
			<div classNameName="container">
				<div className="row item text-center">
					<div className="col-12">
						Task 1
						<button type="button" className="btn btn-space btn-danger">
							<i className="far fa-trash-alt"></i>
						</button>
						<button type="button" className="btn btn-space btn-warning">
							<i className="fas fa-pencil-alt"></i>
						</button>
					</div>
				</div>

				<div className="row item text-center">
					<div className="col-12">
						Task 2
						<button type="button" className="btn btn-space btn-danger">
							<i className="far fa-trash-alt"></i>
						</button>
						<button type="button" className="btn btn-space btn-warning">
							<i className="fas fa-pencil-alt"></i>
						</button>
					</div>
				</div>

				<div className="row item text-center">
					<div className="col-12">
						Task 3
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

export default Tasks;
