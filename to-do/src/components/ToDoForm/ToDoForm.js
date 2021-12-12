import {useContext, useState} from 'react';
import { ToDoContext } from '../Provider/Provider';
import './ToDoForm.scss';

function ToDoForm({addTask}) {
  const [tasksInput, setTasksInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(tasksInput)
    setTasksInput('')
  }

  const handleChange = (e) => {
    setTasksInput(e.currentTarget.value)
  }

  const handleKeySubmit = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <form className="todo" onSubmit={handleSubmit}>
      <input 
        value={tasksInput}
        type='text'
        onChange={handleChange}
        onKeyDown={handleKeySubmit}
        placeholder='+ Add a task, press Enter to save'
        className='todo-text__inp'
      />
      <button className='todo-sub__btn'>Add</button>
    </form>
  )
}

export default ToDoForm;