import './Layout.scss';
import {useContext, useEffect, useState} from 'react';
import ToDo from '../ToDo/ToDo';
import ToDoForm from '../ToDoForm/ToDoForm';
import Sidebar from '../Sidebar/Sidebar';
import { toDoService } from '../../services/todo.service';
import { ToDoContext } from '../Provider/Provider';


function Layout() {

  const {getToDoList, toDoList, updateToDo, deleteToDo, createToDo} = useContext(ToDoContext)

  useEffect(() => {
    getToDoList()
  }, [])

  const addTask = async (tasksInput) => {
    if (tasksInput) {
      createToDo(tasksInput)
    }
  }

  const handleToggle = (todo) => {
    updateToDo({
      ...todo,
      completed: !todo.completed
    })
  }

  const handleChangeToDo = (todo) => {
    updateToDo(todo)
  }

  const inProgressToDoList = (todos) => todos.filter(item => !item.completed)

  const completeToDoList = (todos) => todos.filter(item => item.completed)

  return (
    <main className='layout'>
      <Sidebar />
      <div className='layout-todo__list'>
        <div className='layout-task__add'>
          <ToDoForm addTask={addTask}/>
          <span className='layout-task__total'>Total: {toDoList.length}</span>
          <h2 className='layout-task__title'>To do ({inProgressToDoList(toDoList).length})</h2>
          {inProgressToDoList(toDoList).map(item => {
            return (
              <ToDo
                key={item.id}
                todo={item}
                toggleTask={handleToggle}
                removeTask={deleteToDo}
                updateTask={handleChangeToDo}
              />
            )
          })}
        </div>
        <div className='layout-task__complete'>
          <h2 className='layout-task__complete__title'>Completed ({completeToDoList(toDoList).length})</h2>
          {completeToDoList(toDoList).map(item => {
            return (
              <ToDo
                key={item.id}
                todo={item}
                toggleTask={handleToggle}
                removeTask={deleteToDo}
                updateTask={updateToDo}
              />
            )
          })}
        </div>
      </div>
    </main>
  );
}

export default Layout;