import './search-panel.css';

function SearchPanel({ query, setQuery }) {
  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      type="text"
      placeholder="Search todos..."
      className="form-control search-input"
    />
  );
}

export default SearchPanel;
