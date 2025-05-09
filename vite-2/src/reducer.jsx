const initialState = {
  todoList: []
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return { ...state, todoList: [...state.items, action.payload] };
      case 'UPDATE_TODO':
        return {
          ...state,
          todoList: state.todoList.map(todo =>
            todo.id === action.payload.id ? action.payload : todo
          )
        };
      case 'DELETE_TODO':
        return {
          ...state,
          todoList: state.todoList.filter(todo => todo.id !== action.payload)
        };
        case 'GET_TODOS': {
          return {
            ...state,
            todoList: action.payload
          }
        }
      default:
        return state;
    }
  };