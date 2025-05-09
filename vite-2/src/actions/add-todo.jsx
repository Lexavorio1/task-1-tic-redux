export const addTodo = (id, title) => ({
    type: 'ADD_TODO',
    payload: { id, title }
})