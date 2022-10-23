import { FC, useState } from "react";
import styles from "./Todo.module.scss";
import { ITodo } from "../../types/Todo";

export interface TodoProps {
	todo: ITodo,
}

export const Todo: FC<TodoProps> = ( props ) => {
	const {
		todo
	} = props;

	const [completed, setCompleted] = useState(false);
	
	return (
		<div className={styles.todo}>
			<input 
				type={"checkbox"} 
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompleted(e.target.checked)}
			/>
			<div className={styles.title}>
				<span className={`${completed ? styles.completed : ""}`}>{todo.title}</span>
			</div>
		</div>
	);
};
