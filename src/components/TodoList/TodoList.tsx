import { FC } from "react";
import { ITodo } from "../../types/Todo";
import { Todo } from "../Todo/Todo";
import styles from "./TodoList.module.scss";

export interface TodoListProps {
	todos: ITodo[] | null;
}

export const TodoList: FC<TodoListProps> = ( props ) => {
	const {
		todos
	} = props;

	return (
		<div className={styles.todoList}>
			{todos ? todos.map(item => <Todo key={item.id} todo={item}/>) : ""}
		</div>
	);
};
