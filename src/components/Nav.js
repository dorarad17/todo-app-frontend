import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
	render() {
		return (
			<div className="container">
				<nav className="navbar fixed-top justify-content-between">
					<a className="navbar-brand" href="">
						<h1>To Do List</h1>
					</a>

					<span className="links justify-content-end">
						<Link to="/home" className="links">
							Home
						</Link>{" "}
						|{" "}
						<Link to="/about" className="links">
							About
						</Link>
					</span>
				</nav>
			</div>
		);
	}
}

export default Nav;
