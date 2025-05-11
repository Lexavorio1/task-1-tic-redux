import axios from "axios";
import { updateTodo } from "../actions";

export const UseUpdate = (id, newTitle) => {   
    return async (dispatch) => {
            try {
                await axios.put(`http://localhost:2016/todos/${id}`, {
                    title: newTitle
                });
            } catch (error) {
                console.error('Ошибка при обновлении:', error);
            } finally {
                dispatch(updateTodo(id, newTitle))
            }
        }
    };