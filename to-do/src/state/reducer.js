import { ADD_TODO_TYPE, DELETE_TODO_TYPE, SET_TODOS_TYPE, UPDATE_TODO_TYPE } from "./actions"

export const initialState = {
  todos: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS_TYPE:
      return {
        ...state,
        todos: action.payload
      }
    case ADD_TODO_TYPE:
      return {
        ...state,
        todos: [...state.todos, action.payload] 
      }
    case UPDATE_TODO_TYPE:
      const todoIndex = state.todos.findIndex((item) => item.id === action.payload.id)
      return {
        ...state,
        todos: [...state.todos.slice(0, todoIndex), action.payload, ...state.todos.slice(todoIndex + 1)]
      }
    case DELETE_TODO_TYPE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    default:
      return state
  }
}
