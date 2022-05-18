import { useState } from 'react';
import './add-new-items.css';

function AddNewItems({ addItem }) {
  const [content, setContent] = useState('');

  function addItem2(e) {
    e.preventDefault();
    if (content === '') return;
    const newItem = {
      content,
      id: Date.now(),
    };
    addItem(newItem);
    setContent('');
  }

  return (
    <form action="">
      <input
        value={content}
        className="form-control distance"
        type="text"
        placeholder="Create a new task..."
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={addItem2} className="btn btn-outline-secondary">
        Add Task
      </button>
    </form>
  );
}

export default AddNewItems;
