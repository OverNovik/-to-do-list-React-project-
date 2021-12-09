import './Layout.scss';
import {useState} from 'react';
import ToDo from '../ToDo/ToDo';
import ToDoForm from '../ToDoForm/ToDoForm';
import Sidebar from '../Sidebar/Sidebar';

function Layout() {
  const [todo, setTodo] = useState([])

  const addTask = (tasksInput) => {
    if (tasksInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: tasksInput,
        complete: false
      }
      setTodo([...todo, newItem])
    }
  }

  const removeTask = (id) => {
    setTodo([...todo.filter(item => item.id !== id)])
  }

  const handleToggle = (id) => {
    setTodo([
      ...todo.map(item => 
        item.id === id ? {...item, complete: !item.complete} : {...item}
      )
    ])
    console.log(todo)
  }

  return (
    <main className='layout'>
      <Sidebar />
      <div className='layout-todo__list'>
        <div className='layout-task__add'>
          <ToDoForm addTask={addTask}/>
          <span className='layout-task__total'>Total: {todo.length}</span>
          <h2 className='layout-task__title'>To do ({todo.length})</h2>
          {todo.map(item => {
            return (
              <ToDo
                key={item.id}
                todo={item}
                toggleTask={handleToggle}
                removeTask={removeTask}
              />
            )
          })}
        </div>
        <div className='layout-task__complete'>
          <h2 className='layout-task__complete__title'>Completed ({todo.length})</h2>
        </div>
      </div>
    </main>
  );
}

export default Layout;
