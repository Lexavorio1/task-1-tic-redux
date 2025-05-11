import { deleteTodo } from "../actions";
import axios from "axios";

export const UseDelete = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`http://localhost:2016/todos/${id}`);
        } catch (error) {
            console.error('Ошибка при удалении:', error);
        } finally {
            dispatch(deleteTodo(id))
        }
    };
};