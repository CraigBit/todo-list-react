import { useState } from 'react';
import './todo-items.css';

function TodoItems({ content, done, deleteItem, toggleDone }) {
  const [importance, setImportance] = useState(false);

  return (
    <span
      className={`todo-list-item ${importance ? 'important' : ''} ${
        done ? 'done' : ''
      }`}
    >
      <span className="todo-list-item-label" onClick={toggleDone}>
        {content}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={() => setImportance(!importance)}
      >
        <i className="fa fa-exclamation"></i>
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={deleteItem}
      >
        <i className="fa fa-trash-o"></i>
      </button>
    </span>
  );
}

export default TodoItems;
