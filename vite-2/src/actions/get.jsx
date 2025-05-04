export const fetchTodos = () => async dispatch => {
    dispatch({ type: 'FETCH_TODOS_REQUEST' })
    try {
      const response = await fetch('http://localhost:2016/todos')
      const data = await response.json();
      dispatch({ type: 'FETCH_TODOS_SUCCESS', payload: data })
    } catch (error) {
      dispatch({ type: 'FETCH_TODOS_FAILURE', error: error.message })
    }
} 