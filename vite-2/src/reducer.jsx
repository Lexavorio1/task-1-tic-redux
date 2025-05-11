const initialState = {
  todoList: [],
  isLoading: false,
  error: null,
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
      case 'AXIOS_TODOS_REQUEST':
        return { ...state, isLoading: true, error: null };
      case 'AXIOS_TODOS_SUCCESS':
        return { ...state, todoList: action.payload, isLoading: false, error: null };
      case 'AXIOS_TODOS_FAILURE':
        return { ...state, todoList: [], isLoading: false, error: action.payload }
      case 'ADD_TODO':
        return { ...state, todoList: [...state.todoList, action.payload] };
      case 'UPDATE_TODO':
        return {
          ...state,
          todoList: state.todoList.map(todo =>
            todo.id === action.payload.id 
            ? { ...todo, title: action.payload.newTitle } 
            : todo
          )
        };
      case 'DELETE_TODO':
        return {
          ...state,
          todoList: state.todoList.filter(todo => todo.id !== action.payload)
        };
      default:
        return state;
    }
  };