import { createContext, useReducer } from "react"
import { toDoService } from "../../services/todo.service";
import { ADD_TODO_TYPE, DELETE_TODO_TYPE, SET_TODOS_TYPE, UPDATE_TODO_TYPE } from "../../state/actions";
import { initialState, reducer } from "../../state/reducer"

export const ToDoContext = createContext();

export const Provider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getToDoList = async () => {
    const response = await toDoService.get()
    dispatch({
      type: SET_TODOS_TYPE,
      payload: response
    })
  };

  const createToDo = async (todoTitle) => {
    const response = await toDoService.post({
      title: todoTitle,
      completed: false
    })
    dispatch({
      type: ADD_TODO_TYPE,
      payload: response
    })
  }

  const updateToDo = async (todo) => {
    const response = await toDoService.update(todo)
    dispatch({
      type: UPDATE_TODO_TYPE,
      payload: response
    })
  }

  const deleteToDo = async (id) => {
    await toDoService.delete(id)
    dispatch({
      type: DELETE_TODO_TYPE,
      payload: id
    })
  }

  return (
    <ToDoContext.Provider value={{
      toDoList: state.todos,
      getToDoList,
      createToDo,
      updateToDo,
      deleteToDo
    }}>
      {children}
    </ToDoContext.Provider>
  )
}