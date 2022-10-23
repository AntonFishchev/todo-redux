import axios from "axios";
import { Dispatch } from "redux";
import { ITodoAction, TodoActionTypes } from "../../types/store/todo";

export const fetchTodos = (url: string) => {
	return async (dispatch: Dispatch<ITodoAction>) => {
		try {
			dispatch({type: TodoActionTypes.FETCH_TODOS});
			const response = await axios.get(url);
			dispatch({
				type: TodoActionTypes.FETCH_TODOS_SUCCESS, 
				payload: response.data
			});
		} catch (e) {
			dispatch({
				type: TodoActionTypes.FETCH_TODOS_ERROR, 
				payload: (e as Error).message
			});
		}
	}
};