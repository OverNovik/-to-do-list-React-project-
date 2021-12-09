import './ToDo.scss';
import Garbage from '../../assets/garbage.png';
import Edit from '../../assets/edit.png';
import Copy from '../../assets/copy.png'

function ToDo({todo, toggleTask, removeTask}) {
  return (
    <div
      key={todo.id}
      className='todo-item'
    >
      <div
        className={todo.complete ? 'todo-item__container cross-out' : 'todo-item__container'}
        onClick={() => toggleTask(todo.id)}
      >
        <input type='checkbox' className='todo-item__check' />
        <span className='todo-item__text'>{todo.task}</span>
      </div>
      <div className='todo-item__toolbar'>
        <button
          className='todo-item__toolbar__edit'
        >
          <img src={Edit} alt='edit' />
        </button>
        <button
          className='todo-item__toolbar__copy'
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