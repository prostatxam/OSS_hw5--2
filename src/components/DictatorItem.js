import React from 'react';

const DictatorItem = ({ dictator, onEdit, onDelete }) => {
  return (
    <div className="card p-3 shadow-sm bg-light">
      <p className="card-title text-pink">
        <strong>{dictator.name} 🎖🎖</strong> - {dictator.country}
      </p>
      <p>Reign: {dictator.reign_period}</p>
      <p>Policy: {dictator.famous_policy} 💪</p>
      <p>Kill Count: {dictator.kill_count}</p>
      <button className="btn btn-success me-2" onClick={() => onEdit(dictator)}>
        Edit ✏️
      </button>
      <button className="btn btn-danger" onClick={() => onDelete(dictator.id)}>
        Delete ❌
      </button>
    </div>
  );
};

export default DictatorItem;
