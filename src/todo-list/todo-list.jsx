import TodoItems from '../todo-items/todo-items';
import './todo-list.css';

function TodoList({ todos, deleteItem, toggleDone }) {
  const elements = todos.map((item) => {
    const { id, ...itemParts } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoItems
          deleteItem={() => deleteItem(id)}
          {...itemParts}
          toggleDone={() => toggleDone(id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
}

export default TodoList;
