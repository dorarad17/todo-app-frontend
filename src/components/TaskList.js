import React from "react";
import Task from "./Task";

class TaskList extends React.Component {
	render() {
		return (
			<div>
				<div className="row">
					{this.props.taskCollection.map((taskItem) => (
						<Task
							key={taskItem.id}
							item={taskItem}
							deleteTaskNotify={this.props.deleteTaskNotify}
							priorityChangeNotify={this.props.priorityChangeNotify}
							editTaskNotify={this.props.editTaskNotify}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default TaskList;
