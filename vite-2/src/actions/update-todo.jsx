export const updateTodo = (id, newTitle) => ({
    type: 'UPDATE_TODO',
    payload: { id, newTitle }
})
