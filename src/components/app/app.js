
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";

const App = () => {
	const todoData = [
		{ id: 1, label: "Drink Coffee", important: false },
		{ id: 2, label: "Feed the cat", important: true },
		{ id: 3, label: "Go to work", important: true },
	];

	return (
		<div className="row">
			<AppHeader />
			<div className="col">
				<div className="todo-app">
					<SearchPanel />
					<ItemStatusFilter />
					<TodoList todos={todoData} />
				</div>
			</div>
			<div className="col"></div>
		</div>
	);
};


export default App;
