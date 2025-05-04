export const deleteTodo = (id) => async dispatch => {
    if (!window.confirm('Вы уверены, что хотите удалить это дело?')) return;
    
    try {
      await fetch(`http://localhost:2016/todos/${id}`, {
        method: 'DELETE'
      });
      dispatch({ type: 'DELETE_TODO_SUCCESS', payload: id });
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
}