import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
	render() {
		return (
			<div className="container">
				<nav className="navbar fixed-top navbar-expand-md">
					<a className="navbar-brand" href="">
						<h1>To Do List</h1>
					</a>

					<div className="links">
						<Link to="/" className="links">
							Home
						</Link>{" "}
						|{" "}
						<Link to="/about" className="links">
							About
						</Link>
					</div>
				</nav>
			</div>
		);
	}
}

export default Nav;
