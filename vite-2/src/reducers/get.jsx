const initialState = {
    items: [],
    loading: false,
    error: null
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TODOS_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_TODOS_SUCCESS':
        return { ...state, items: action.payload, loading: false };
      case 'FETCH_TODOS_FAILURE':
        return { ...state, error: action.error, loading: false };
      case 'ADD_TODO_SUCCESS':
        return { ...state, items: [...state.items, action.payload] };
      case 'UPDATE_TODO_SUCCESS':
        return {
          ...state,
          items: state.items.map(todo => 
            todo.id === action.payload.id ? action.payload : todo
          )
        };
      case 'DELETE_TODO_SUCCESS':
        return {
          ...state,
          items: state.items.filter(todo => todo.id !== action.payload)
        };
      default:
        return state;
    }
  }