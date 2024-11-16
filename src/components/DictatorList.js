import React from "react";

const DictatorList = ({ dictators, onEdit, onDelete }) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
      {dictators.map((dictator) => (
        <div key={dictator.id} id={`dictator-${dictator.id}`} className="p-3 bg-light rounded">
          <p className="card-title text-pink">
            <strong>{dictator.name} 🎖🎖</strong> - {dictator.country}
          </p>
          <p>Reign: {dictator.reign_period}</p>
          <p>Policy: {dictator.famous_policy} 💪</p>
          <p>Kill Count: {dictator.kill_count}</p>
          <button
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#dictatorModal"
            onClick={() => onEdit(dictator)}
          >
            Edit ✏️
          </button>
          <button className="btn btn-danger" onClick={() => onDelete(dictator.id)}>
            Delete ❌
          </button>
        </div>
      ))}
    </div>
  );
};

export default DictatorList;
