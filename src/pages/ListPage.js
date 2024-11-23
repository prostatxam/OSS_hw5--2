import React from "react";
import { useNavigate } from "react-router-dom";
import DictatorList from "../components/DictatorList";

const ListPage = ({ dictators, refresh }) => {
  const navigate = useNavigate();

  const deleteDictator = async (id) => {
    await fetch(`https://67296e396d5fa4901b6d1e3f.mockapi.io/my_data/${id}`, {
      method: "DELETE",
    });
    refresh();
  };

  return (
    <div className="container my-4">
      <h1 className="text-center">💗✨Dictators✨💗</h1>
      <div className="text-center mb-3">
        <button onClick={refresh} className="btn btn-warning">
          Refresh List
        </button>
        <button
          className="btn btn-pink"
          onClick={() => navigate("/update")}
        >
          Add new dictator
        </button>
      </div>
      <DictatorList dictators={dictators} onEdit={(dictator) => navigate(`/update?id=${dictator.id}`)} onDelete={deleteDictator} />
    </div>
  );
};

export default ListPage;
