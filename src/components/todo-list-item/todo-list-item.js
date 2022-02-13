import "./todo-list-item.scss";

const TodoListItem = ({ label, important = false }) => {
	const style = {
		color: important ? "tomato" : "black",
	};

	return (
		<div className="input-group">
			<span className="list-group-item" style={style}>
				{label}
			</span>
			<button className="btn btn-outline-success" type="button" id="button-addon2">
				✓
			</button>
			<button className="btn btn-outline-danger" type="button" id="button-addon2">
				x
			</button>
		</div>
	);
};

export default TodoListItem;
