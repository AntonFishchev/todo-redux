import { useEffect } from "react";
import { TodoList } from "./components/TodoList/TodoList";
import { useAction } from "./hooks/useAction";
import { useTypedSelector } from "./hooks/useTypedSelector";

export const App = () => {
	const state = useTypedSelector(state => state.todo)
	const { fetchTodos } = useAction();

	useEffect(() => {
		const URL = "https://jsonplaceholder.typicode.com/todos";

		fetchTodos(URL);
	}, []);

	if (state.error) {
		return (
			<h2>{state.error}</h2>
		)
	}

	return (
		<div>
			<TodoList todos={state.todos} />
		</div>
	);
};
