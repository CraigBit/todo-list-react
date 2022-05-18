const ItemStatusFilter = ({ filter, setFilter }) => {
  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];

  const getButtons = buttons.map(({ name, label }) => {
    const isActive = filter === name;
    const btnClass = isActive ? 'btn-info' : 'btn-outline-secondary';
    return (
      <button
        type="button"
        className={`btn ${btnClass}`}
        key={name}
        onClick={() => setFilter(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{getButtons}</div>;
};

export default ItemStatusFilter;
