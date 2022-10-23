import { ITodo } from "../Todo";

export interface ITodoState {
	todos: ITodo[];
	loading: boolean;
	error: string | null;
}

export enum TodoActionTypes {
	FETCH_TODOS = "FETCH_TODOS",
	FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
	FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
}

export type ITodoAction =
	| IFetchTodoAction
	| IFetchTodoSuccessAction
	| IFetchTodoErrorAction;

interface IFetchTodoAction {
	type: TodoActionTypes.FETCH_TODOS;
}

interface IFetchTodoSuccessAction {
	type: TodoActionTypes.FETCH_TODOS_SUCCESS;
	payload: any[];
}

interface IFetchTodoErrorAction {
	type: TodoActionTypes.FETCH_TODOS_ERROR;
	payload: string;
}
