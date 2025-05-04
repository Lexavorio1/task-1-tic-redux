export const updateTodo = (id, currentTitle) => async dispatch => {
    const newTitle = prompt("Введите новый текст дела", currentTitle);
    if (!newTitle || newTitle.trim() === "") return;
  
    try {
      const response = await fetch(`http://localhost:2016/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle })
      });
      const data = await response.json();
      dispatch({ type: 'UPDATE_TODO_SUCCESS', payload: data });
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
}