const initialState = {
    todos: [],
    currentTodo: null
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO_SUCCESS':
        return { ...state, todos: [...state.items, action.payload] };
      case 'UPDATE_TODO_SUCCESS':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload.id ? action.payload : todo
          )
        };
      case 'DELETE_TODO_SUCCESS':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload)
        };
      default:
        return state;
    }
  };