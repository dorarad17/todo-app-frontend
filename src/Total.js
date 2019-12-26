import React from "react";

class Total extends React.Component {
	render() {
		return (
			<div>
				<div className="container">
					<div className="row text-center" id="total">
						<div className="col-12">
							<p>Things to do:</p>
							<span id="number">3</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Total;
