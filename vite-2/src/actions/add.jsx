export const addTodo = (title) => async dispatch => {
    try {
      const response = await fetch('http://localhost:2016/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
      });
      const data = await response.json();
      dispatch({ type: 'ADD_TODO_SUCCESS', payload: data });
      dispatch({ type: 'TOGGLE_FORM' });
    } catch (error) {
      console.error('Failed to add todo:', error);
    }
}