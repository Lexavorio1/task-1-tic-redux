import axios from 'axios';

export const AXIOS_TODOS_REQUEST = 'AXIOS_TODOS_REQUEST';
export const AXIOS_TODOS_SUCCESS = 'AXIOS_TODOS_SUCCESS';
export const AXIOS_TODOS_FAILURE = 'AXIOS_TODOS_FAILURE';

export const axiosTodosRequest = () => ({
  type: AXIOS_TODOS_REQUEST
});

export const axiosTodosSuccess = (todos) => ({
  type: AXIOS_TODOS_SUCCESS,
  payload: todos
});

export const axiosTodosFailure = (error) => ({
  type: AXIOS_TODOS_FAILURE,
  payload: error
});

export const fetchTodos = (flagLoading) => {
  return async (dispatch) => {
    dispatch(axiosTodosRequest());
    try {
      const response = await axios.get(`http://localhost:2016/todos?loading=${flagLoading}`);
      dispatch(axiosTodosSuccess(response.data));
    } catch (error) {
      dispatch(axiosTodosFailure(error.message));
    }
  };
}