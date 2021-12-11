import './ToDo.scss';
import Garbage from '../../assets/garbage.png';
import Edit from '../../assets/edit.png';
import Copy from '../../assets/copy.png'
import { useEffect, useState } from 'react';

function ToDo({todo, toggleTask, removeTask, updateTask}) {
  const [isEdit, setEdit] = useState(false)
  const [title, setTitle] = useState('')
  // const [todo, setTask] = useState({})

  useEffect(() => {
    setTitle(todo.title)
  }, [todo])

  const handleEdit = () => {
    setEdit(true)
    console.log(isEdit)
  }

  const handleSaveChanges = (e) => {
    if (e.key === 'Enter') {
      updateTask({
        ...todo,
        title
      })
      setEdit(false)
    }
  }

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <div
      key={todo.id}
      className='todo-item'
    >
      <div
        className={todo.completed ? 'todo-item__container cross-out' : 'todo-item__container'}
      >
        <input 
          type='checkbox' 
          className='todo-item__check' 
          onClick={() => toggleTask(todo)}
          checked={todo.completed}
        />
        {isEdit ? <input value={title} onKeyDown={(e) => handleSaveChanges(e)} onChange={handleChange} className='todo-item__text__inp'/> : <span className='todo-item__text'>{title}</span>}
      </div>
      <div className='todo-item__toolbar'>
        <button
          className='todo-item__toolbar__edit'
          onClick={handleEdit}
          style={!todo.completed ? {display: 'block'} : {display: 'none'}}
        >
          <img src={Edit} alt='edit' />
        </button>
        <button
          className='todo-item__toolbar__copy'
          style={!todo.completed ? {display: 'block'} : {display: 'none'}}
        >
          <img src={Copy} alt='copy' />
        </button>
        <button
          className='todo-item__toolbar__delete'
          onClick={() => removeTask(todo.id)}
        >
          <img src={Garbage} alt='delete' />
        </button>
      </div>
    </div>
  )
}

export default ToDo;