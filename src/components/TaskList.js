import React from "react";
import Task from "./Task";

class TaskList extends React.Component {
	render() {
		return (
			<div>
				<div className="row">
					{this.props.taskCollection.map((taskItem) => (
						<Task
							key={taskItem.taskId}
							item={taskItem}
							deleteTaskNotify={this.props.deleteTaskNotify}
							priorityChangeNotify={this.props.priorityChangeNotify}
							editTaskNotify={this.props.editTaskNotify}
							completedNotify={this.props.completedNotify}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default TaskList;
