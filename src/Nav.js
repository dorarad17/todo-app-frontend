import React from "react";

class Nav extends React.Component {
	render() {
		return (
			<div>
				<div className="container">
					<div>
						<nav className="navbar fixed-top navbar-expand-md">
							<a className="navbar-brand" href="">
								<h1>To Do List</h1>
							</a>
						</nav>
					</div>
				</div>
			</div>
		);
	}
}

export default Nav;
