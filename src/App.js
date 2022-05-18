import Header from './todo-header/todo-header';
import SearchPanel from './search-panel/search-panel';
import TodoList from './todo-list/todo-list';
import ItemStatusFilter from './item-status-filter/item-status-filter';
import './App.css';
import { useState } from 'react';
import AddNewItems from './add-new-items/add-new-items';

function App() {
  const [todos, setTodos] = useState([
    {
      content: 'Buy a car',
      done: false,
      id: 1,
    },
    {
      content: 'Build a house',
      done: false,
      id: 2,
    },
    {
      content: 'Walk a dog',
      done: false,
      id: 3,
    },
  ]);

  const deleteItem = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const addItem = (newItem) => {
    setTodos([...todos, newItem]);
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, done: !item.done } : { ...item }
      )
    );
  };

  const doneCount = todos.filter((item) => item.done).length;

  const searchTodos = (items, query) => {
    if (query.length === 0) return items;
    return items.filter(
      (item) => item.content.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };

  const [query, setQuery] = useState('');

  const getFilteredTodos = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  };

  const [filter, setFilter] = useState('all');

  const visibleItems = getFilteredTodos(searchTodos(todos, query), filter);

  return (
    <div className="todo-app">
      <Header toDo={todos.length - doneCount} done={doneCount} />
      <div className="top-panel d-flex">
        <SearchPanel query={query} setQuery={setQuery} />
        <ItemStatusFilter filter={filter} setFilter={setFilter} />
      </div>
      <TodoList
        deleteItem={deleteItem}
        todos={visibleItems}
        toggleDone={toggleDone}
      />
      <AddNewItems addItem={addItem} />
    </div>
  );
}

export default App;
