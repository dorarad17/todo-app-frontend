import React from "react";

class Total extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row text-center" id="total">
					<div className="col-12">
						<p>Things to do:</p>
						<span id="number">{this.props.taskTotal}</span>
					</div>
				</div>
			</div>
		);
	}
}

export default Total;
