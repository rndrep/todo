import TodoListItem from "../todo-list-item";
import "./todo-list.scss";

const TodoList = ({ todos }) => {
	// для каждого элемента массива todos создаем реакт элемент
	const elements = todos.map((item) => {
		const { id, ...itemProps } = item;

		// передаем свойства item в компонент TodoListItem в качестве атрибутов со значеними
		return (
			<li key={id} className="todo-list__item">
				<TodoListItem {...itemProps} />
			</li>
		);
	});

	return <ul className="todo-list list-group">{elements}</ul>;
};

export default TodoList;
