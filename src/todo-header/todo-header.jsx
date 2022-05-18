import './todo-header.css';

function Header({ toDo, done }) {
  return (
    <div className="app-header d-flex">
      <h1>Todo App</h1>
      <h2>
        {toDo} more to do, {done} done
      </h2>
    </div>
  );
}

export default Header;
